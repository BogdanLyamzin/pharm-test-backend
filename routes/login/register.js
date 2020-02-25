const express = require("express");
const bodyParser = require('body-parser');
const passport = require("passport");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Users = require('../../model/model');
const validateRegisterInput = require('../../validation/register.js')


const jsonParser = bodyParser.json();

module.exports = (app)=> {
    app.get("/register", jsonParser, (req, res)=> {
        res.send("You need to register");
    });

    app.post("/register", jsonParser, async (req, res) => {

        const { errors, isValid } = validateRegisterInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        res.json({
            message: 'work!',
            log: `${req.body.login}`,
            pas: `${req.body.password}`
        })
    });
};

