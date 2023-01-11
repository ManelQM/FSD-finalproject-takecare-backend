
        const express = require('express');
        const router = express.Router();
        const {isValidRole,isValidUser,authBearerMiddleware,} = require("../middlewares/authMiddleware");
        const {allMyServices,updateService,servicesByContract,deleteService,} = require('../controllers/ServicesController');

        
        router.get('/allmyservices', isValidUser(),allMyServices);
        router.patch('/updateservice',isValidUser(),updateService);
        // router.get('/services/bycontract',isValidUser(),servicesByContract);
        router.delete('/delete',isValidRole(1),deleteService ); 

        module.exports = router; 


        