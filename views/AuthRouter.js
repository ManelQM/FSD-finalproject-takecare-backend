
    const express = require('express'); 
    const router = express.Router(); 

    const {
        authLoginController
    } = require("../controllers/AuthController");

    router.post ("/login", authLoginController);

    module.exports = router; 

    

    