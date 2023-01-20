
        const express = require('express');
        const router = express.Router();
        const {isValidRole,isValidUser,authBearerMiddleware,} = require("../middlewares/authMiddleware");
        const {allMyServices,updateService,servicesByContract,deleteService,} = require('../controllers/ServicesController');

        
        router.get('/allmyservices',isValidRole("admin"),allMyServices);
        router.patch('/updateservice',updateService);
        // router.post('/createservice',isValidUser(),createService);
        // router.get('/services/bycontract',isValidUser(),servicesByContract);
        router.delete('/delete',isValidUser(),deleteService ); 

        module.exports = router; 


        