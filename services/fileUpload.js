
var path = require('path');
var multer = require('multer');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})

//will be using this for uplading files
exports.upload = multer({ storage: storage });

