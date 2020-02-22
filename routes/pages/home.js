module.exports = (app)=> {
    app.get("/", (req, res)=> {
        // res.html("<p>Welcome</p>")
        res.send("Welcome!");
    });
}