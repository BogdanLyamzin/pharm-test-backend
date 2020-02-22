// const home = (server) => {
//     // server === app
//     server.get("/", (req, res)=> {
//         res.send("Welcome!");
//     });
// };

const register = require("login/register");
const login = require("login/login");

const home = require("./home");

// Users Routes
const deleteUser = require("./users/delete");

module.exports = (server) => {
    // server === app
    home(server);
    register(server);
    login(server);

    deleteUser(server);
};