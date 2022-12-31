const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = (req, res, next) => {

    console.log(req.headers);

    // If token exists
    if(!req.headers.authorization) {
        res.status(401).json({ msg: "Access denied" });
    } else {

        
        let token = req.headers.authorization.split(" ")[1];

        // Token validation
        jwt.verify(token, authConfig.secret, (err, decoded) => {

            if(err) {
                res.status(500).json({ msg: "Token error", err });
            } else {
                req.user = decoded;
                next();
            }

        })
    }

};