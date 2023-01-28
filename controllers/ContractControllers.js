const contract = require("../models/contract");
const models = require("../models/index");

const getAllContracts = async (req, res) => {
  try {
    const contracts = await models.Contract.findAll();
    res.json({ message: "Founded Users", contracts });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message,
    });
  }
};

const createContract = async (req, res) => {
  console.log("ssoy pepe the frog", req.body);

  try {
    const contract = req.body;
    const newContract = await models.Contract.create({
      title: contract.title,
      nickname: contract.nickname,
      userid: contract.userid,
      publicationid: contract.publicationid,
    });
    res.json({
      message: "Created Contract",
      newContract,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = {
  getAllContracts,
  createContract,
};
