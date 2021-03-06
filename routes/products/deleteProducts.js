const Product = require("../../models/Product");

module.exports = (app) => {
    app.delete("/products/:id", async (req, res)=> {

        const id = req.params;

        try {
            const result = await Product.findByIdAndDelete(id);
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