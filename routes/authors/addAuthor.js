const Book = require("../../models/Book");

module.exports = (app) => {
    app.post('/author', async (req, res) => {
        const authorData = {
            name: req.body.name,
            lastName: req.body.lastName
        };
        const author = new Book(bookData);

        try {
            const result = await book.save();
            res.send({
                status: "Success",
                result: result,
            });
        } catch (err) {
            res.send({
                status: "Error",
                message: err,
            });
        }
    });
};
