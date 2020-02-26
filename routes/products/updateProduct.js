const Product = require("../../models/Product");

module.exports = (app) => {
    app.put("/products/:id", async (req, res)=> {

        const id = req.params;

        const newProduct = {
            name: req.body.name,
            article: req.body.article
        }

        try {
            const result = await Product.findByIdAndUpdate(id, newProduct);
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