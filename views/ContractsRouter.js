    const express = require('express'); 
    const router = express.Router();


    const {
        createContract,getAllContracts,
    } = require("../controllers/ContractControllers");


    router.post("/newcontract",createContract);
    router.get("/allcontracts",getAllContracts); 
    // router.delete("/deletecontract",destroyContract); 

    module.exports = router
