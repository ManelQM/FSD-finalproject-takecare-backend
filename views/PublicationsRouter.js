        
        const express = require('express');
        const router = express.Router();
        const {isValidRole, isValidUser} = require('../middlewares/authMiddleware');
            const {
            createPublication,
            updateMyPublication,
            deletePublication,
            getMyPublications,
            getAllPublications,
            } = require('../controllers/PublicationsController'); 

        router.post("/publications/newpublication",createPublication);
        router.patch("/publications/updatepublication",updateMyPublication);
        router.delete("/publications/delete",deletePublication);
        router.get("/publications/mypublications",getMyPublications);
        router.get("/publications/all",getAllPublications);


        module.exports = router;