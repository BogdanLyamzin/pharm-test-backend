const {Schema, model} = require("mongoose");

const productShema = Schema({
    name: {
        type: String,
        minlength: 2,
        required: true
    },
    article: {
        type: Number,
        required: true
    },
    // category: {
    //     type: Schema.Objectid,
    //     ref: "Category"
    // }
});

module.exports = model("Product", productShema);