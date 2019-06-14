const express = require("express");
const router = express.Router();
const authorRoutes = require("./author_routes");
const bookRoutes = require("./book_routes");

router.use("/authors", authorRoutes);
router.use("/books", bookRoutes);

module.exports = router;