const Gallery = require('../models/gallery');
require("dotenv").config();
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.gallery = function (req, res, error) {
    //get all my gallery photos
    if (req.method == "GET") {

        Gallery.find({}).exec()
            .then(function (pictures) {
                //catch any response on the url
                let response = req.query.response
                res.render('admin/gallery', { layout: 'main', pictures: pictures.map(picture => picture.toJSON()), response });
            })
            .catch(function (error) {

                res.render('admin/gallery', { layout: 'main', error: error });
            })

    }
}

exports.createGallery = function (req, res, error) {
    //create a new gallery photo
    if (req.method == "POST") {

        //take care of cloudinary uploads, by getting the right path
        cloudinary.uploader.upload(req.file.path, function (error, image) {

            let picture_name = req.file.filename
            let picture_url = image.secure_url

            let gallery = new Gallery({

                title: req.body.title,
                picture_description: req.body.description,
                picture: picture_name,
                picture_url: picture_url,

            })

            gallery.save(function (error) {
                if (error) {
                    res.render("admin/gallery", {
                        showInfo: true,
                        status: 401,
                        success: false,
                        message: error
                    })

                } else {
                    res.redirect('/admin_gallery?response=Picture uploaded to successfully')
                }

            })

        })


    }
}