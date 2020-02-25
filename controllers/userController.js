exports.user = function (req, res, error) {

    if (req.method == "GET") {

        res.render('admin/user');
       
    }
}