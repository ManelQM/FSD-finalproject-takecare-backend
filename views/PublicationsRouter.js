        
        const express = require('express');
        const router = express.Router();
        
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
        
        const {isValidRole, isValidUser} = require('../middlewares/authMiddleware');
        router.get("/mypublications",isValidUser,getMyPublications);
        

        module.exports = router;