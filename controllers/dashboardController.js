exports.dashboard = function (req, res, error) {

    if (req.method == "GET") {

        res.render('admin/dashboard');
       
    }
}