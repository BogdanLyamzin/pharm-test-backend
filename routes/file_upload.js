const multer  = require('multer');
const fs = require("fs");
const path = require("path");

const upload = multer({ dest: '/tmp'});

//console.log(__dirname)
//console.log(multer);

module.exports = (app) => {
    app.post('/file_upload', upload.single('file'), function (req, res) {
//        path.join(__dirname, '../uploads', req.file.originalname)
        const file = path.join(__dirname, '../uploads', req.file.originalname);
        fs.rename(req.file.path, file, function (err) {
            console.log(req.file.path);
            console.log(file);
            if (err) {
                console.log(err);
                res.send(500);
            } else {
                res.json({
                    message: 'File uploaded successfully',
                    filename: req.file.filename
                });
            }
        });
    });
}
