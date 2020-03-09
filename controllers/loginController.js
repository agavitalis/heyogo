//import anything necessary
var User = require('../models/user');
var Bcrypt = require('bcryptjs');
var Jwt = require('jsonwebtoken');



exports.login = async function (req, res, error) {

    if (req.method == "POST") {
        // Show a plain alert

        let user = {
            email: req.body.email,
            password: req.body.password
        }       

        User.findOne({ email: user.email }, function (err, found) {

            if (found) {
                let userPassword = Bcrypt.compareSync(user.password, found.password)

                if (userPassword) {
                    
                    let token = Jwt.sign({ email: user.email },
                        process.env.SECRET,
                        {
                            expiresIn: '24h' // expires in 24 hours
                        }
                    );
                    
                    //set the session
                    req.session.token = token;
                    res.redirect('/?AuthResponse=Login Successful')
                } else {
                   
                    // res.send(403).json({
                    //     success: false,
                    //     message: 'Incorrect username or password'
                    // });
                    res.redirect('/?AuthResponse=Invalid Credentials')
                }
            }else{
                res.redirect('/?AuthResponse=Invalid Credentials')
            }

        })
    }
}

