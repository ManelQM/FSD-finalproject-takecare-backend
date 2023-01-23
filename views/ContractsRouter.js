    const express = require('express'); 
    const router = express.Router();
    const {isValidRole,isValidUser} = require("../middlewares/auth")


    const {
        createContract,getAllContracts,
    } = require("../controllers/ContractControllers");


    router.post("/newcontract",createContract);
    router.get("/allcontracts",isValidRole(1),getAllContracts); 
    // router.delete("/deletecontract",destroyContract); 

    module.exports = router
