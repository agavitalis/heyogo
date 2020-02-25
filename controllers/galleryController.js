exports.gallery = function (req, res, error) {

    if (req.method == "GET") {

        res.render('admin/gallery');
       
    }
}