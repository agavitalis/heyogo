
exports.index = function (req, res, error) {

    if (req.method == "GET") {

        res.send({
            status:200 , 
            success:true , 
            message: 'Welcome to Babel Node!!!' ,
         })
       
    }
}

exports.protected = function (req, res, error) {

    if (req.method == "GET") {

        res.send({
            status:200 , 
            success:true , 
            message: 'Welcome to Babel Node!!!..The protected Route' ,
         })
       
    }
}