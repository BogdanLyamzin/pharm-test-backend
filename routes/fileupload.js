const path = require("path");

module.exports = (app) => {
    app.get('/fileupload', function (req, res) {
        res.sendFile(path.join(__dirname, '../public', 'fileupload.html'));
    })
}
