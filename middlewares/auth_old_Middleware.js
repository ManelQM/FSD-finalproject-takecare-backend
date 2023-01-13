
    const jwt = require("jsonwebtoken");
    const authConfig = require('../config/auth');
    //Here is  how the middleware authenticate the User


//      const authBearerMiddleware = (req, res, next) => {
//         const authentication = req.headers["authorization"];
//         const token = authentication && authentication.split(" ")[1];
//     //   const token = req.header("Authorization")
//     console.log(req);
//     if (!token) return res.status(401).send({ message: "error comparando!!!" })

//     try {
//         const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
//         // next()
//         console.log(verified.id,"verified id")
//         console.log (req.params.id, "req id")
//         if (verified.id != req.params.id) {
//             res.status(401).send({ message: "Access denied mala verificacion"})
//         } else {
//             next()
//         }
//     } catch (error) {
//         res.status(400).send({ message: 'Invalid token!' })
//     }
    

//    };

// const authBearerMiddleware = async (req, res, next) => {
//     const { authorization } = req.headers;
//     try {
//       const [strategy, jwt] = authorization.split(" ");
//       if (strategy.toLowerCase() !== "bearer") {
//         throw new Error("Invalid strategy");
//       }
  
//       const payload = jsonwebtoken.verify(jwt, process.env.ACCESS_TOKEN_SECRET);
//       req.auth = payload;
//       next();
//     } catch (error) {
//       res
//         .status(401)
//         .json({ message: "You are not authenticated. Please log in again" });
//       return;
//     }
//   };

// const authentication = req.headers["authorization"];
//         const token = authentication && authentication.split(" ")[1];
//     //   const token = req.header("Authorization")


    const authBearerMiddleware = (req, res, next) => {

    console.log(req.headers);

    // Comprobar que existe el token
    if(!req.headers.authorization) {
        res.status(401).json({ msg: "Acceso no autorizado" });
    } else {

        // Comrpobar la validez de este token
        let token = req.headers.authorization.split(" ")[1];
        console.log(token, "esto es el token que viene del header")
        // Comprobar la validez de este token
        jwt.verify(token, authConfig.secret, (err, decoded) => {

            if(err) {
                res.status(500).json({ msg: "Ha ocurrido un problema al decodificar el token", err });
            } else  {
                req.user = decoded;
                next();
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
        authBearerMiddleware,
        isValidRole,
        isValidUser,
        isValidUserId
      };

