var Gallery = require('../models/gallery');

exports.gallery = function (req, res, error) {
    //get all my gallery photos
    if (req.method == "GET") {

        Gallery.find({}).exec()
        .then(function(pictures){
            //catch any response on the url
            var response = req.query.response
            res.render('admin/gallery', {layout: 'main', pictures:pictures.map(picture => picture.toJSON()),response});
        })
        .catch(function(error){
            
            res.render('admin/gallery',{layout: 'main', error: error});
        })
       
    }
   
    //create a new gallery photo
    else if(req.method == "POST"){
       
        var picture_name  = req.file.filename
        var picture_url  = "public/uploads/"+picture_name
 
         var post = new Gallery({

            title: req.body.title,
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