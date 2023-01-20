    const contract = require("../models/contract");
const models = require ("../models/index");



    const getAllContracts = async (req,res) => {
     try {
        const contracts = await models.Contract.findAll();
        res.json({message:"Founded Users", contracts});
    }catch (error){
        console.error(error);
    }
};

    const createContract = async (req,res) => {
        try { 
            const contract = req.body; 
            const newContract = await models.Contract.create({
                title: contract.title,
                nickname: contract.nickname,
                user_id: contract.user_id,
                publication_id: contract.publication_id 
            });
            res.json ({
                message: "Created Contract",newContract,
            });
        } catch (error) {
                console.error(error);
            }
        
     };

     

module.exports = {
    getAllContracts,
    createContract,


}
    