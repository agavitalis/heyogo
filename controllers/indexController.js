
var ContactUs = require('../models/contact_us');
var Gallery = require('../models/gallery');
var Product = require('../models/product');
var Post = require('../models/post');

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

        Gallery.find({}).exec()
        .then(function(pictures){
            //catch any response on the url
            var response = req.query.response
            res.render('gallery', {layout: 'main', pictures:pictures.map(picture => picture.toJSON()),response});
        })
        .catch(function(error){
            
            res.render('gallery',{layout: 'main', error: error});
        })
       
    }
}

exports.products = function (req, res, error) {

    if (req.method == "GET") {

        Product.find({}).exec()
        .then(function(products){
            //catch any response on the url
            var response = req.query.response
            res.render('products', {layout: 'main', products:products.map(product => product.toJSON()),response});
        })
        .catch(function(error){
            
            res.render('products',{layout: 'main', error: error});
        })
       
    }
}

exports.blog = function (req, res, error) {

    if (req.method == "GET") {

        Post.find({}).exec()
        .then(function(posts){
            //catch any response on the url
            var response = req.query.response
            res.render('blog', 
            {layout: 'main',
             posts:posts.map(post => post.toJSON()),response,
             helpers: {
                brief: function (post) { return post.substring(0, 290); }
            }
            });
        })
        .catch(function(error){
            
            res.render('blog',{layout: 'main', error: error});
        })
       
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

