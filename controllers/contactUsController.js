var ContactUs = require('../models/contactUs');

exports.contact = function (req, res, error) {

    if (req.method == "GET") {

        ContactUs.find({}).exec()
        .then(function(messages){
            //catch any response on the url
            var response = req.query.response
            res.render('admin/contact', {layout: 'main', messages:messages.map(message => message.toJSON()),response});
        })
        .catch(function(error){
            
            res.render('admin/contact',{layout: 'main', error: error});
        })
       
    }
}