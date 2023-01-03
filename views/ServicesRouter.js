
        const express = require('express');
        const router = express.Router();
        const {isValidRole,isValidUser,authBearerMiddleware,} = require("../middlewares/AuthMiddleware");
        const {allMyServices,updateService,servicesByContract,deleteService,} = require('../controllers/ServicesController');

        
        router.get('/services/allmyservices', isValidUser(),allMyServices);
        router.patch('/services/updateservice',isValidUser(),updateService);
        // router.get('/services/bycontract',isValidUser(),servicesByContract);
        // router.delete('/services/delete',isValidRole(1),deleteService ); 

        module.exports = router; 
