        
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
            
        router.get("/allpublications",getAllPublications);
        router.post("/newpublication",createPublication);
        router.patch("/updatepublication",updateMyPublication);
        router.delete("/delete",deletePublication);
        router.get("/mypublications",getMyPublications);
        

        module.exports = router;