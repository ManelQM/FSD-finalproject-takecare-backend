
        const models = require ('../models/index');
        require("dotenv").config();
        // const { Op } = require("sequelize");
        const PublicationsController = {} ; 

        PublicationsController.createPublication = async (req,res) => {
            
            try{
                const publication = req.body;
                const newPublication = await models.publications.create({
                    title: publication.name,
                    text: publication.text,
                    offeredto: publication.offeredto,
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
                        title: publication.title,
                        text: publication.text,
                        offeredto: publication.offeredto,
                        fulljourney: publication.fulljourney
                    },
                    {
                        where: {
                            id: publication.id
                        }
                    }
                );
                 res.json({
                    message: "Publication updated!!",
                 });
            }catch (error) {
                console.error(error);
            }
        }

        PublicationsController.deletePublication = async (req,res) => {
            try{
                const publicationId = req.body.publication;
                const publication = await models.publications.findOne ({
                    where: {
                         id: publicationId,
                    },
                });
                 if (publication.user_id !== req.auth.id) {
                    res.json({
                        message: "Cant delete publication. Not authorized!"
                    });
                 } else {
                    await models.publication.destroy({
                        where: {
                            id: publicationId,
                        },
                    });
                    res.json({
                        message: "Publication deleted"
                    }); 
                 }
            }catch (error) {
                console.error(error);
            }
        }

        
        module.exports = PublicationsController;