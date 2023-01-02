        
        const express = require('express');
        const router = express.Router();
        const {isValidRole, isValidUser} = require('../middlewares/authMiddleware');
        const {
            createPublication,
            deletePublication,
            updateMyPublication,
            getMyPublications,
            getAllPublications,
            deleteAllMyPublications,
        } = require('../controllers/PublicationsController'); 

        router.post("/publications/newpublication",createPublication);
        // router.delete("/publications/delete",deletePublication);
        // router.patch("/publications/updatepublication",updateMyPublication);
        // router.get("/publications/mypublications",getMyPublications);
        // router.get("/publications/all",getAllPublications);
        // router.delete("/publications/deleteallmy",deleteAllMyPublications);


        module.exports = router;