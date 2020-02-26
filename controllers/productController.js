var multer  = require('multer')

exports.product = function (req, res, error) {

    if (req.method == "GET") {

        res.render('admin/product');
       
    }
    else if(req.method == "POST"){
       
       var picture_name  = req.file.filename
       //var picture_url  = "public/uploads/" + req.file.filename
       // grab the form parametere from req.body
       console.log(picture_name)
       res.render('admin/product');
        
    }
}