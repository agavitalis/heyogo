
exports.index = function (req, res, error) {

    if (req.method == "GET") {

        res.render('index');
       
    }
}
