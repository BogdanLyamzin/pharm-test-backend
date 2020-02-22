module.exports = (server) => {
    server.delete("users/:id", (req, res)=> {
        // запрос на удалени
        res.send({
            status: "Success",
            result: data
        });
    });
};