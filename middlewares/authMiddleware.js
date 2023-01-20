
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');


const { user } = require('../models/index'); //incluyo user model

module.exports = (req, res, next) => {

    //console.log(req.headers);

    // Comprobar que existe el token
    if(!req.headers.authorization) {
        res.status(401).json({ msg: "Acceso no autorizado" });
    } else {

        // Comrpobar la validez de este token
        let token = req.headers.authorization.split(" ")[1];

        // Comprobar la validez de este token
        jwt.verify(token, authConfig.secret, (err, decoded) => {

            if(err) {
                res.status(500).json({ msg: "Ha ocurrido un problema al decodificar el token", err });
            } else {
                
                user.findByPk(decoded.user.id, { include: "roles" }).then(user => {
                    //console.log(user.roles);
                    req.user = user;
                    next();
                });
            }

        })
    }

};


    // Middleware for roles
    const isValidRole = (role) => (req,res,next) => {

        if(req.auth?.role === role) {
            next();
        }else {
            res.status(403).json({message:"Not Authorized :("})
        }

      }

      //Middleware works here giving permissions and access to some areas

      const isValidUser = (email) => async (req,res,next) => {
        
        email = req.params.email || req.body.email;
        console.log(email);
        console.log(req.auth.email);
        
        if(req.auth?.email === email) {
            next();

        } else {
            res.status(403).json({message: "ACCESS DENIED. NOT AUTHORIZED"});
        }
      };


      const isValidUserId = (id) => async (req,res,next) => {
        id = req.params.id || req.body.id;
        console.log (id);
        console.log (req.auth.id);
        if (req.auth?.id == id) {
            next();
        } else {
            res.status(403).json({message: "Not authorized"})
        }
      };

      module.exports = {
        isValidRole,
        isValidUser,
        isValidUserId
      };

