const express = require("express");
const router = express.Router();
const db = require("../models");
const jwt = require("jsonwebtoken");

router.post("/", (req, res) => {
  const email = req.body.suEmail ? req.body.suEmail.trim() : "";
  const password = req.body.suPassword ? req.body.suPassword.trim() : "";
  // console.log(process.env.REACT_APP_SECRET_KEY)

  if (email && password) {
    db.User.create({ email, password, character: [] })
      .then(async (newUser) => {
        const token = await jwt.sign(
          {
            email: newUser.email,
            id: newUser.id,
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
          },
          process.env.REACT_APP_SECRET_KEY
        );
        // console.log(token);
        await res.json({
          success: true,
          data: token,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500);
        res.json({
          success: false,
          message: "Failed to create new user.",
        });
      });
  } else {
    res.status(500).json({
      success: false,
      message: "Please enter a valid username and password.",
    });
  }
});

router.put("/:id", (req, res) => {
  console.log(req.body.value);
  var characterData = { _id: req.body.value };
  db.User.findByIdAndUpdate(
    req.params.id,
    { $addToSet: { characters: characterData } },
    {
      options: { new: true },
    }
  )
    .then((characters) => {
      console.log(characters);
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

module.exports = router;
