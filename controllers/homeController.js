const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/:id", (req, res) => {
    console.log(req.params.id)
    db.User.findById(req.params.id)
  //   .populate("characters")
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

router.get("/:id", (req, res) => {
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

router.put("/:id", (req, res) => {
  db.Character.findByIdAndUpdate(req.params.id, req.body, {
    options: { new: true },
  })
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

router.post("/", (req, res) => {
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

module.exports = router;
