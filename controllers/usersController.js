const express = require("express");
const router = express.Router();
const db = require("../models");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

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
  
module.exports = router;
