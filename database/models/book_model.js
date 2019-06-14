const mongoose = require("mongoose");
const BookSchema = require("./../schemas/book_schema");

const BookModel = mongoose.model("book", BookSchema);

module.exports = BookModel;