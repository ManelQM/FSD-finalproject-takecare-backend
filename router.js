    
    const router = require('express').Router();
   

       

    // Middlewares
    const {authBearerMiddleware} = require("./middlewares/authMiddleware")

    //Importamos Routes definidas en views
    // const MovieRouter = require('./views/MovieRouter');
    // const CategoryRouter = require('./views/CategoryRouter');
    const UsersRouter = require('./views/UsersRouter');
       


    //Rutas
    router.use('/users', UsersRouter); //Login and register routes
    // router.use('/movies',auth, MovieRouter); //add auth
    // router.use('/categories',auth, CategoryRouter);
    router.use(authBearerMiddleware)

    module.exports = router;