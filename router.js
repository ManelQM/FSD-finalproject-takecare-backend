    
    const router = require('express').Router();
   

       

    // Middlewares
    const auth = require('./middlewares/auth');

    //Importamos Routes definidas en views
    // const MovieRouter = require('./views/MovieRouter');
    // const CategoryRouter = require('./views/CategoryRouter');
    const UsersRouter = require('./views/UsersRouter');
       


    //Rutas
    router.use('/users', UsersRouter); //Login and register routes
    // router.use('/movies',auth, MovieRouter); //add auth
    // router.use('/categories',auth, CategoryRouter);

    module.exports = router;