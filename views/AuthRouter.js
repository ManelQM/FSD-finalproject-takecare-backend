
    const express = require('express'); 
    const router = express.Router(); 

    const {
        authLoginController,
        authRegisterController
    } = require("../controllers/AuthController");

    router.post ("/users/login", authLoginController);
    router.post("/users/register", authRegisterController);

    module.exports = router; 

    