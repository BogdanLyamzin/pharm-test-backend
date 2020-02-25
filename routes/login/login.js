const passport = require('passport');
const jwt = require('jsonwebtoken');

module.exports = (app)=> {
    app.get('/login', (req, res) => {
        res.send("Sign In");
    });

};
