
var ContactUs = require('../models/contact_us');

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

exports.customer_contact = function (req, res, error) {

    if (req.method == "POST") {

        var contact_us = new ContactUs({
            name: req.body.name,
            email: req.body.email,
            message:  req.body.message,
           
        })

        contact_us.save(function (error) {
            if (error) {
                res.render("/",{
                    showInfo:true,
                    status: 401,
                    success: false,
                    message: error
                })
            
            } else {
                res.redirect('/?response=Message recorded, we will get bck to you soon')
            }
    
        })
       
    }
}

