const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

module.exports = CommentSchema;