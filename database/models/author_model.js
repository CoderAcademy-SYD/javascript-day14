const mongoose = require("mongoose");
const AuthorSchema = require("./../schemas/author_schema");

const AuthorModel = mongoose.model("author", AuthorSchema);

module.exports = AuthorModel;