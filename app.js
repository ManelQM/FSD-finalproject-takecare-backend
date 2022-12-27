    
    
    const express = require ('express'); 
    const app = express;
    const PORT = process.env.PORT || 3000; // Configuramos puerto 
    const db = require ('./db.js'); 
    const router = require ('router.js'); 


    // Middleware 

    app.use(express.json()); 

    //Routes

    app.get('/',(req,res) => {res.send('Nice to see you :)');});
    app.use(router); 

    //DB Connection 

    db.then(() => {

        // Starting Server

        app.listen(PORT, () => console.log (`Ciclo de Trantor nº ${PORT}`.bgGreen.black));
    })

    .catch((error) => console.log (error.message ,'ERROR')); 

    
    

