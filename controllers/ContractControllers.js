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
      userid: contract.userid,
      title: contract.title,
      nickname: contract.nickname,
      publicationid: contract.publicationid,
    });
    res.json({
      message: "contract created.",
      newContract,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message,
    });
  }
};

const getContractById = async (req, res) => {

  let id = req.params.id;

  try {
    const contracts = await models.Contract.findAll(
      {
        where: {
          userid: id
        }
      }
    );

    res.send(contracts);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message,
    });
  }

}

const destroyContract = async (req, res) => {

  let id = req.params.id;

  try {
    const contracts = await models.Contract.destroy(
      {
        where: {
          id: id
        }
      }
    );
    if(contracts){
      res.send("Contrado eliminado correctamente");

    }else {
      res.send("No se ha podido eliminar el contrato");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message,
    });
  }
}

module.exports = {
  getAllContracts,
  createContract,
  getContractById,
  destroyContract
};
