const {Schema} = require("mongoose");

const Author = new Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
},{ _id : false });

module.exports = Author;