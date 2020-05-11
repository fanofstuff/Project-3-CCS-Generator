const router = require("express").Router();
const charactersController = require("../../controllers/charactersController");

// Matches with "/api/books"
router.route("/")
  .get(charactersController.findAll)
  .post(charactersController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
  // .delete(booksController.remove);

module.exports = router;
