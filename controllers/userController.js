const User = require('../models/user');

exports.getUsers = function (req, res, error) {

    if (req.method == "GET") {

        User.find({}).exec()
            .then(function (users) {
                //catch any response on the url
                let response = req.query.response
                res.render('admin/users', { layout: 'main', users: users.map(user => user.toJSON()), response });
            })
            .catch(function (error) {

                res.render('admin/users', { layout: 'main', error: error });
            })

    }
}

exports.createUser = function (req, res, error) {
    //create a user
    if (req.method == "GET") {

        //catch any response on the url
        let response = req.query.response
        res.render('admin/createUser', { layout: 'main', response });

    }else{

        let user = new User({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
        })

        user.save(function (error) {
            if (error) {
                res.render("admin/createUser", {
                    showInfo: true,
                    status: 401,
                    success: false,
                    message: error
                })

            } else {
                res.redirect('/admin/createUser?response=User successfully created')
            }

        })


    }
}