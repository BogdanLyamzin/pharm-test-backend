const {Schema, model} = require("mongoose");
const authorSchema = require("../schemas/author");

const Book = Schema({
    name: {
        type: String,
        required: true
    },
    author: authorSchema
});

module.exports = model("Book", Book);