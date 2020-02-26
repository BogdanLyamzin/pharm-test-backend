const Product = require("../../models/Product");

module.exports = (app) => {
    app.post("/products/", async (req, res)=> {
        const productData = {
            name: req.body.name,
            article: req.body.article
        };

        const product = new Product(productData);

        try {
            const result = await product.save();
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

/*
        produt.save()
            .then(data => res.send({
            status: "Success",
            result: data
        }))
            .catch(err => res.send({
                status: "Error",
                message: err
            }));
      */
/*
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
*/
    });
};