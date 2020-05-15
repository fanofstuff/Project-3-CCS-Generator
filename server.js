require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const UserController = require("./controllers/usersController");
const AuthController = require("./controllers/authController");
// const MatchesController = require("./controllers/matchesController");

const PORT = process.env.PORT || 3001;

const app = express();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pathfinder", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = require("./models");

const connection = mongoose.connection;
connection.on("connected", () => {
  console.log("Mongoose connected successfully");
});
connection.on("error", (err) => {
  console.log("Mongoose default connection error: ", err);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
    currentPort: PORT,
  });
});

app.use("/api/users", UserController);
app.use("/api/auth", AuthController);
// app.use("/api/matches", MatchesController);

app.get("/api/characters", (req, res) => {
  db.Character.find()
    .then((characters) => {
      res.json(characters);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
        message: "No characters found",
      });
    });
});

app.get("/api/characters/:id", (req, res) => {
  db.Character.findById(req.params.id)
    .then((characters) => {
      res.json(characters);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
        message: "No characters found",
      });
    });
});

app.put("/api/characters/:id", (req, res) => {
  db.Character.findByIdAndUpdate(req.params.id, req.body, {options: {new:true}})
    .then((characters) => {
      res.json(characters);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
        message: "No characters found",
      });
    });
});

app.post("/api/characters", (req, res) => {
  db.Character.create(req.body)
    .then((characters) => {
      res.json(characters);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
        message: "No characters found",
      });
    });
});

app.use(express.static("client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Express App is running on http://localhost:${PORT}`);
});
