      
        const express = require ('express'); 
        const db = require ('./db/db'); 
        const router = require ('./router.js'); 
        const app = express();
        const PORT = process.env.PORT || 3000; // Configuramos puerto 
        const cors = require("cors");
    

        // Middleware 
        
        app.use(cors(corsOptions));
        app.use(express.json()); 

        //Routes

        app.use(router); 


        //Config Cors Options
        var corsOptions = {
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        preflightContinue: false,
        optionsSuccessStatus: 204,
        };



        //DB Connection 

        app.listen(PORT, () => {
            console.log (`Welcome to TakeCare at Port ${PORT }`);
            
            db.then( () => {
                console.log ('Nice to see you again (DB connected)');
            }).catch(error => {
                console.log ('This thing between us its not working: ' + error)
            }) 
        
        })
        

