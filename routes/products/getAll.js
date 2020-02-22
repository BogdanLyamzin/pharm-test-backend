module.exports = (app) => {
    app.get("/allProducts/", (req, res)=> {
        res.send({
            status: "Success",
            result: data
        });
    })
}