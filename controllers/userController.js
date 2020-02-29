var User = require('../models/user');

exports.user = function (req, res, error) {

    if (req.method == "GET") {

        res.render('admin/user');
       
    }
    //create a blog post
    else if(req.method == "POST"){

         var user = new User({
             first_name: req.body.first_name,
             last_name: req.body.last_name,
             email:  req.body.email,
             password:  req.body.password,
         })
 
         user.save(function (error) {
             if (error) {
                 res.render("admin/user",{
                     showInfo:true,
                     status: 401,
                     success: false,
                     message: error
                 })
             
             } else {
                 res.redirect('/admin_user?response=User successfully created')
             }
     
         })
        
         
    }
}