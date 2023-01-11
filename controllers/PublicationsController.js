
        const models = require ('../models/index');
        
        require("dotenv").config();
       
        

        const createPublication = async (req,res) => {
            
            try{
                const publication = req.body;
                const newPublication = await models.publications.create({
                    title: publication.name,
                    nickname: publication.nickname,
                    age: publication.age,
                    text: publication.text,
                    fulljourney: publication.fulljourney,
                    childrencare: publication.childrencare,
                    disablecare: publication.disablecare,
                    elderlycare: publication.elderlycare,
                });
                 res.json ({
                    message: "Created Publication",newPublication,
                 });
            }catch (error) {
                console.error(error); 
            }
        };

        const updateMyPublication = async (req,res) => {
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

        const deletePublication = async (req,res) => {
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

        const getMyPublications = async (req,res) => {
            try {
                let publications = await models.publications.findAll({
                    where: {
                        user_id: req.auth.id,
                    },
                });
                 res.json ({
                    message: "Here we have all your publications",
                    publications,
                 });
            }catch (error) {
                console.error(error);
            }
        };
        
        const getAllPublications = async (req,res) => {
            try {
                let publications = await models.publications.findAll({
                    where: {
                        password: req.auth.password
                    }
                });
                
                res.json({message: "All the publications list", publications});
            }catch (error) {
                console.error(error);
            }
        }

            module.exports = {
            createPublication,
            updateMyPublication,
            deletePublication,
            getMyPublications,
            getAllPublications};