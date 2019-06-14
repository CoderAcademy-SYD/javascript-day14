const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CommentSchema = require("./comment_schema");

const BookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "author"
    },
    comments: [CommentSchema]
});

module.exports = BookSchema;