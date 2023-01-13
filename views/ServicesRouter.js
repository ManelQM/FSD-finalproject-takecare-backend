
        const express = require('express');
        const router = express.Router();
        const {isValidRole,isValidUser,authBearerMiddleware,} = require("../middlewares/authMiddleware");
        const {allMyServices,updateService,servicesByContract,deleteService,} = require('../controllers/ServicesController');

        
        router.get('/allmyservices',allMyServices);
        router.patch('/updateservice',updateService);
        // router.get('/services/bycontract',isValidUser(),servicesByContract);
        router.delete('/delete',deleteService ); 

        module.exports = router; 


        