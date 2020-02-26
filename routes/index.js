// const home = (server) => {
//     // server === app
//     server.get("/", (req, res)=> {
//         res.send("Welcome!");
//     });
// };

const register = require("./login/register");
const login = require("./login/login");

// Users Routes
const deleteUser = require("./users/delete");

module.exports = (server) => {
    // server === app
    register(server);
    login(server);

    deleteUser(server);
};