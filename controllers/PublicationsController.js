
        const models = require ('../models/index');
        require("dotenv").config();
        const { Op } = require("sequelize");
        const PublicationsController = {} ; 

        PublicationsController.createPublication = async (req,res) => {
            
            try{
                const publication = req.body;
                const newPublication = await models.publications.create({
                    title: publication.name,
                    offeredto: publication.offeredto,
                    text: publication.text,
                    fulljourney: publication.fulljourney,
                    age: publication.age,
                });
                 res.json ({
                    message: "Created Publication",newPublication,
                 });
            }catch (error) {
                console.error(error); 
            }
        };

        PublicationsController.updateMyPublication = async (req,res) => {
            try {
                const publication =req.body; 
                await models.publication.update(
                    {
                        
                    }
                )
            }
        }
        
