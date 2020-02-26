const mongoose = require("mongoose");

const productShema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    article: {
        type: Number,
        required: true
    }
});

const productsModel = mongoose.model("Product", productShema);

module.exports = (app) => {
    app.post("/products/", (req, res)=> {
        const productData = {
            name: req.body.name,
            article: req.body.article
        };

        // productsModel.find({})

        const product = new productsModel(productData);

        // product.save()
        //     .then(data => {
        //
        //     })

        product.save(function (err, data) {
            if(err) {
                res.send({
                    status: "Error",
                    message: err
                });
            }
            else {
                res.send({
                    status: "Success",
                    result: data
                })
            }
        });
    })
}