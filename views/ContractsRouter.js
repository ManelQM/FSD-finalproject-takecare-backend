const express = require("express");
const router = express.Router();


const authMiddleware = require("../middlewares/authMiddleware");

const {
  createContract,
  getAllContracts,
  getContractById,
  destroyContract
} = require("../controllers/ContractControllers");

router.post("/newcontract", authMiddleware, createContract);
router.get("/allcontracts", authMiddleware, getAllContracts);
router.get("/usercontracts/:id", authMiddleware, getContractById);
router.delete("/deletecontract/:id", authMiddleware, destroyContract);

module.exports = router;
