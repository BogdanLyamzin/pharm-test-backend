const {Schema, model} = require("mongoose");
const {integer, email, name} = require("../configs/validationRules");
const createValidate = require("../utils/createValidate");

const {articleValid, emailValid} = createValidate(integer, email);

const productShema = Schema({
    name: {
        type: String,
        minlength: 2,
        required: [true, name.required]
    },
    article: {
        type: Number,
        required: [true, integer.required],
        validate: articleValid,
    },
    email: {
        type: String,
        required: [true, email.required],
        validate: emailValid
    }
});

module.exports = model("Product", productShema);
