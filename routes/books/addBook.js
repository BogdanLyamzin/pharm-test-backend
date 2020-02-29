const Book = require("../../models/Book");

module.exports = (app) => {
    app.post('/books', async (req, res) => {
        const bookData = {
            name: req.body.name,
            author: {
                name: req.body.author.name,
                lastName: req.body.author.lastName
            }
        };
        const book = new Book(bookData);

        try {
            const result = await book.save();
            res.send({
                status: "Success",
                result: result,
            });
        } catch(err) {
            res.send({
                status: "Error",
                message: err,
            });
        }
    });
};
