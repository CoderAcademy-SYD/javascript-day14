const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        default: ""
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'non binary'],
        default: 'non binary'
    }
});

module.exports = AuthorSchema;