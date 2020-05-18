const express = require("express");
const router = express.Router();
const db = require("../models");

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
        message: "Character could not be updated",
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
        message: "Character could not be created",
      });
    });
});

router.delete("/:id", (req, res) => {
  db.Character.findByIdAndDelete(req.params.id)
    .then((characters) => {
      res.json(characters);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
        message: "Character could not be deleted",
      });
    });
});

module.exports = router;
