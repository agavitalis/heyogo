var Post = require('../models/post');

exports.blog = function (req, res, error) {

    if (req.method == "GET") {

        res.render('admin/blog');
       
    }
    //create a blog post
    else if(req.method == "POST"){
       
        var picture_name  = req.file.filename
        var picture_url  = "public/uploads/"+picture_name
 
         var post = new Post({
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
        
         
     }
}