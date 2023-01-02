
        const express = require('express');
        const router = express.Router();
        const ServicesController = require('../controllers/ServicesController'); 
        const {isValidRole,authBearerMiddleware,} = require("../middlewares/AuthMiddleware");

        
        router.get('/services/allmyservices');
        router.patch('/services/updateservice');
        router.get('/services/bycontract');
        router.delete('/services/delete'); 

        module.exports = router; 