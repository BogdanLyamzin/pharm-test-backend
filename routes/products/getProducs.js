const Product = require("../../models/Product");

module.exports = (app) => {
    app.get("/products/", async (req, res)=> {

        try {
            const result = await Product.find(req.query);
            res.send({
                status: "Success",
                result
            });
        }
        catch(err) {
            res.send({
                status: "Error",
                message: err.message
            })
        }
    });
};