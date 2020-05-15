require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const UserController = require("./controllers/usersController");
const AuthController = require("./controllers/authController");
const CharactersController = require("./controllers/charactersController");

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
app.use("/api/characters", CharactersController);

app.use(express.static("client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Express App is running on http://localhost:${PORT}`);
});
