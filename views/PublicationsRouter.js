        
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

        router.post("/newpublication",createPublication);
        router.patch("/updatepublication",updateMyPublication);
        router.delete("/delete",deletePublication);
        router.get("/mypublications",getMyPublications);
        router.get("/all",getAllPublications);


        module.exports = router;