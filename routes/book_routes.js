const express = require("express");
const router = express.Router();
const BookController = require("../controllers/book_controller");
const CommentController = require("./../controllers/comment_controller");

router.get("/", BookController.index);

router.post("/", BookController.create);

router.get("/new", BookController.make);

router.get("/:id", BookController.show);

router.delete("/:id", BookController.destroy);

router.put("/:id", BookController.update);

router.patch("/:id", BookController.update);

router.get("/:id/edit", BookController.edit);

router.post("/:bookId/comment", CommentController.create);

module.exports = router;