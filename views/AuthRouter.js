
    const express = require('express'); 
    const router = express.router(); 

    const {
        authLoginController,
        authRegisterController
    } = require("../controllers/AuthController");

    router.post ("/users/login", authLoginController);
    router.post("/users/register", authRegisterController);

    module.exports = router; 

    