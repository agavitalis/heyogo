//necessary imports
import Bcrypt from 'bcryptjs';
import User from '../models/User';

exports.register = async function (req, res, error) {

    if (req.method == "POST") {
        User.findOne({email:req.body.email}).then(found =>{
            if(found){
                res.status(400).send({
                    success:false , 
                    message:'A user with this email already exist, did you forget your password?'
                })
            }else{

                var passwordHash = Bcrypt.hashSync(req.body.password , 10)
                new User({

                    first_name:req.body.firstname,
                    last_name:req.body.lastname,
                    email:req.body.email,
                    password:passwordHash

                }).save( function(error,user){
                    if(error){
                        res.send({
                        
                            status: 401,
                            success: false,
                            message: error
                        })
                    }else{

                        res.send({              
                            status: 200,
                            success: true,
                            user:user,
                            message: "User successfully Created"
                        })
                    }
                })
            }
        })
    }  

}

 