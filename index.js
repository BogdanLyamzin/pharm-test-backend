const express = require("express");
// const bodyParser = require('bodyParser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
const routes = require("./routes/");

require('./auth/auth');

/*
    app.get("/", (req, res)=> {
        res.send("Welcome!");
    });
*/


routes(app);

app.listen(3000, ()=> {
    console.log("Express work!")
});