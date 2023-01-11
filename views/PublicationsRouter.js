        
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
            
        router.get("/allpublications",isValidUser,getAllPublications);
        router.post("/newpublication",isValidUser,createPublication);
        router.patch("/updatepublication",isValidUser,updateMyPublication);
        router.delete("/delete",isValidUser,deletePublication);
        router.get("/mypublications",getMyPublications);
        

        module.exports = router;