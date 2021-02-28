const Post = require('../models/post');
require("dotenv").config();
const cloudinary = require("cloudinary").v2;

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});


exports.getBlogPosts = function (req, res, error) {

    if (req.method == "GET") {

        Post.find({}).exec()
        .then(function(posts){
            //catch any response on the url
            let response = req.query.response
            res.render('admin/blog', {layout: 'main', posts:posts.map(post => post.toJSON()),response});
        })
        .catch(function(error){
            
            res.render('admin/blog',{layout: 'main', error: error});
        })
       
    }
}

exports.createBlogPost = function(req,res, error){
    //create a blog post
     if(req.method == "POST"){

        //take care of cloudinary uploads, by getting the right path
		cloudinary.uploader.upload(req.file.path,function(error, image) {

            let picture_name  = req.file.filename
            let picture_url  = image.secure_url
            
     
             let post = new Post({
                 title: req.body.title,
                 content: req.body.content,
                 picture: picture_name,
                 picture_url: picture_url,
         
             })
     
             post.save(function (error) {
                 if (error) {
                     res.render("admin/blog",{
                         showInfo:true,
                         status: 401,
                         success: false,
                         message: error
                     })
                 
                 } else {
                     res.redirect('/admin_blog?response=Blog Post successfully created')
                 }
         
             })

		});
         
    }
}