exports.contact = function (req, res, error) {

    if (req.method == "GET") {

        res.render('admin/contact');
       
    }
}