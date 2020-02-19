//import anything necessary
import User from '../models/User';
import Bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


exports.login = async function (req, res, error) {

    if (req.method == "POST") {

        let user = {
            email: req.body.email,
            password: req.body.password
        }

       let token = jwt.sign({ user },
            process.env.SECRET,
            {
                expiresIn: '24h' // expires in 24 hours
            }
        )
        res.json({
            success: true,
            message: 'Authentication successful',
            user:user.email,
            token: token,
        });
      
       

        // User.findOne({ email: user.email }, function (err, found) {

        //     if (found) {
        //         let userPassword = Bcrypt.compareSync(user.password, found.password)

        //         if (userPassword) {
        //             let token = jwt.sign({ email: user.email },
        //                 process.env.SECRET,
        //                 {
        //                     expiresIn: '24h' // expires in 24 hours
        //                 }
        //             );
        //             res.json({
        //                 success: true,
        //                 message: 'Authentication successful!',
        //                 token: token
        //             });
        //         } else {
        //             res.send(403).json({
        //                 success: false,
        //                 message: 'Incorrect username or password'
        //             });
        //         }
        //     }

        // })
    }
}

