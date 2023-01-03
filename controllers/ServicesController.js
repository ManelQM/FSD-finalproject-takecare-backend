        
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
                let servicesupdate = req.body.service;
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

        const deleteService = async (req,res) => {
            try {
                let destroyService = req.body.service;
                const service = await models.services.findOne({
                    where: {
                        id:destroyService,
                    },
                });
                if (service.publication_id !== req.auth.id) {
                    res.json({
                        message: "Cant delete the Service"
                    });
                } else {
                    await models.services.destroy({
                        where: {
                            id:destroyService,
                        },
                    });
                    res.json({
                        message: "Service deleted with success",
                    });
                }
            }catch (error) {
                console.error(error);
            }
        };

  
        module.exports = {
            allMyServices,
            updateService,
            // servicesByContract,
            deleteService
        };