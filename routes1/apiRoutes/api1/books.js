const router = require("express").Router();
const booksController = require("../../../app/controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router.route("/:id")
  //.get(booksController.findById)
  .get(booksController.findByUser)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
