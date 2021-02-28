const User = require('../models/user');
const Bcrypt = require('bcryptjs');
const Jwt = require('jsonwebtoken');



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
                    
                    req.session.token = token;
                    req.session.vitalis = "Ogbonna Vitalis";
                    
                    res.redirect('/?AuthResponse=Login Successful')
                } else {
                    res.redirect('/?AuthResponse=Invalid Credentials')
                }
            }else{
                res.redirect('/?AuthResponse=Invalid Credentials')
            }

        })
    }
}

