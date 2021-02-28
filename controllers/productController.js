const Product = require('../models/product');
require("dotenv").config();
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.getProducts = function (req, res, error) {
    //if it is a get request
    if (req.method == "GET") {

        Product.find({}).exec()
            .then(function (products) {
                //catch any response on the url
                var response = req.query.response
                res.render('admin/product', { layout: 'main', products: products.map(product => product.toJSON()), response });
            })
            .catch(function (error) {

                res.render('admin/product', { layout: 'main', error: error });
            })

    }
}

exports.createProduct = function (req, res, error) {
    if (req.method == "POST") {

        //take care of cloudinary uploads, by getting the right path
        cloudinary.uploader.upload(req.file.path, function (error, image) {

            let picture_name = req.file.filename
            let picture_url = image.secure_url


            var product = new Product({
                product_name: req.body.product_name,
                product_description: req.body.product_description,
                picture: picture_name,
                picture_url: picture_url,

            })

            product.save(function (error) {
                if (error) {
                    res.render("admin/product", {
                        showInfo: true,
                        status: 401,
                        success: false,
                        message: error
                    })

                } else {
                    res.redirect('/admin_product?response= Product successfully created')
                }

            })

        })

    }
} 