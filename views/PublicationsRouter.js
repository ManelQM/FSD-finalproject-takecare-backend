        
        const express = require('express');
        const router = express.Router();
        const {isValidRole, isValidUser} = require('../middlewares/auth');
        
            const {
            createPublication,
            updateMyPublication,
            deletePublication,
            getMyPublications,
            getAllPublications,
            } = require('../controllers/PublicationsController'); 
            
        router.get("/allpublications",getAllPublications);
        router.post("/newpublication",isValidUser(),createPublication);
        router.patch("/updatepublication",isValidUser(),updateMyPublication);
        router.delete("/delete",isValidRole(1),deletePublication);
        router.get("/mypublications",isValidUser(),getMyPublications);
        

        module.exports = router;