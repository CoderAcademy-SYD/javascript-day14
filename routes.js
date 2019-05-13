const express = require("express");
const router = express.Router();
const AuthorController = require("./controllers/author_controller");

router.get("/authors", AuthorController.index);

router.post("/authors", AuthorController.create);

router.get("/authors/new", AuthorController.make);

module.exports = router;