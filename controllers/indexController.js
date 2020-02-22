
exports.index = function (req, res, error) {

    if (req.method == "GET") {

        res.render('index');
       
    }
}

exports.about = function (req, res, error) {

    if (req.method == "GET") {

        res.render('about');
       
    }
}

exports.contact = function (req, res, error) {

    if (req.method == "GET") {

        res.render('contact');
       
    }
}

exports.gallery = function (req, res, error) {

    if (req.method == "GET") {

        res.render('gallery');
       
    }
}

exports.products = function (req, res, error) {

    if (req.method == "GET") {

        res.render('products');
       
    }
}

exports.blog = function (req, res, error) {

    if (req.method == "GET") {

        res.render('blog_categories');
       
    }
}



