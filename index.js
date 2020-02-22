const express = require("express");

const app = express();

const routes = require("./routes/");

/*
    app.get("/", (req, res)=> {
        res.send("Welcome!");
    });
*/

routes(app);

app.listen(3000, ()=> {
    console.log("Express work!")
});