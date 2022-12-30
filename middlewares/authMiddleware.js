
    const jsonwebtoken = require("jsonwebtoken");

    //Here is  how the middleware authenticate the User

    const authBearerMiddleware = async (req, res, next) => {
        
        const {authorization} = req.headers;
        try {
            const [strategy,jwt] = authorization.split("");
            if(strategy.toLowerCase() !== "bearer") {
                throw new Error ("Incorrect Strategy");
            }

            const payload = jsonwebtoken.verify(jwt,"jsonwebtokensecret");
            req.auth = payload;
            next();

        } catch (error) {
            res 
            .status(401)
            .json({message: "Who are you Sir? Please log your account"});
            return;
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

