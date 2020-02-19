let jwt = require('jsonwebtoken');

let authenticate = (req, res, next) => {
    let token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization'] ;// Express headers are auto converted to lowercase
   
    if (token) {

        if (token.startsWith('Bearer ')) {
            // Remove Bearer from string
            token = token.slice(7, token.length);
        }

        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {
                return res.json({
                    success: false,
                    message: 'Token is not valid'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.json({
            success: false,
            message: 'Auth token is not supplied'
        });
    }
};

exports.authenticate = authenticate
