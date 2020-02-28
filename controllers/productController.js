var Product = require('../models/product');

exports.product = function (req, res, error) {
    //if it is a get request
    if (req.method == "GET") {

        Product.find({}).exec()
        .then(function(products){
            //catch any response on the url
            var response = req.query.response
            res.render('admin/product', {layout: 'main', products:products.map(product => product.toJSON()),response});
        })
        .catch(function(error){
            
            res.render('admin/product',{layout: 'main', error: error});
        })
        
    }

    else if(req.method == "POST"){
       
       var picture_name  = req.file.filename
       var picture_url  = "public/uploads/"+picture_name

        var product = new Product({
            product_name: req.body.product_name,
            product_description: req.body.product_description,
            picture: picture_name,
            picture_url: picture_url,
    
        })

        product.save(function (error) {
            if (error) {
                res.render("admin/product",{
                    showInfo:true,
                    status: 401,
                    success: false,
                    message: error
                })
            
            } else {
                res.redirect('/admin_product?response= Product successfully created')
            }
    
        })
       
        
    }
}