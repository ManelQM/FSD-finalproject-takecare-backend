
        const express = require('express');
        const router = express.Router();
        const ServicesController = require('../controllers/ServicesController'); 
        const {isValidRole,isValidUser,authBearerMiddleware,} = require("../middlewares/AuthMiddleware");

        
        router.get('/services/allmyservices', isValidUser(),ServicesController.allMyServices);
        router.patch('/services/updateservice',isValidUser(),ServicesController.updateService);
        router.get('/services/bycontract',isValidUser(),ServicesController.servicesByContract);
        router.delete('/services/delete',isValidRole(1),ServicesController.deleteService ); 

        module.exports = router; 
