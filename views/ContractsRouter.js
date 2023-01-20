const express = require('express'); 
const router = express.Router; 

const {
    createContract,
} = require("../controllers/ContractControllers");


router.post("/newcontract",createContract)