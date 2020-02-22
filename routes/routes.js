// const home = (server) => {
//     // server === app
//     server.get("/", (req, res)=> {
//         res.send("Welcome!");
//     });
// };

const register = require("login/register");
const login = require("login/login");

const home = require("./pages/home");


module.exports = (server) => {
    // server === app
    home(server);
    register(server);
    login(server);
};