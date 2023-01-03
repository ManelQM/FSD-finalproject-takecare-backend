        
        const models = require('../models/index');
        const {passwordServiceEncrypt} = require('../services/AuthServices');
        require('dotenv').config();
    

        const allMyServices = async (req,res) => {
            try {
                let services = await models.services.findAll({
                    where:{
                        publication_id: req.auth.id,
                    },
                });
                res.json({
                    message: "Here are your Services",
                    services,
                });
            }catch(error){}
        }; 

        const updateService = async (req,res) => {
            try {
                let servicesupdate = req.body.services;
                const services = await models.services.findOne({
                    where:{
                        id:servicesupdate,
                    },
                });
                if (services.publication_id !== req.auth.id) {
                    res.json({
                        message: "Can not update service"
                    })
              }else{
                await models.services.update({
                    title: req.body.title,
                    salary:req.body.salary
               },{
                where: {
                    id:servicesupdate,
                },
               }
               );
               res.json({
                message: "Service Updated",
               });
              }
            } catch (error) {
                console.error(error);
            }
        };

  
        module.exports = {
            allMyServices,
            updateService,
            // servicesByContract,
            // deleteServices
        };