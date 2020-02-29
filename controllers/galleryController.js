var Gallery = require('../models/gallery');

exports.gallery = function (req, res, error) {
    //get all my gallery photos
    if (req.method == "GET") {

        res.render('admin/gallery');
       
    }
   
    //create a new gallery photo
    else if(req.method == "POST"){
       
        var picture_name  = req.file.filename
        var picture_url  = "public/uploads/"+picture_name
 
         var post = new Gallery({

            title: req.body.name,
            picture_description: req.body.description,
            picture: picture_name,
            picture_url: picture_url,
     
         })
 
         post.save(function (error) {
             if (error) {
                 res.render("admin/gallery",{
                     showInfo:true,
                     status: 401,
                     success: false,
                     message: error
                 })
             
             } else {
                 res.redirect('/admin_gallery?response=Picture uploaded to successfully')
             }
     
         })
        
         
    }
}