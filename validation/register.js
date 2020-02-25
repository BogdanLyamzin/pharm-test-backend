const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateRegisterInput(data) {
    let errors = {};
    data.login = !isEmpty(data.login) ? data.login : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    if ( Validator.isEmpty(data.login) ) {
        errors.login = "Укажите логин";
    }

    if (data.password.length < 6) {
        errors.password = "Пароль должен состоять не менее чем из 6 символов";
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "Укажите пароль";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
