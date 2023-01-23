
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = (req, res, next) => {
    if(!req.headers.authorization) {
        res.status(401).json({ msg: "Access denied" });
    } else {
        let token = req.headers.authorization.split(" ")[1];
       
        jwt.verify(token, authConfig.secret, (err, decoded) => {
            console.log(err);
            if(err) {
                res.status(500).json({ msg: "Error during token decodification", err });
            } else {
                req.user = decoded;
                next();
            }
        })
    }
};




 

