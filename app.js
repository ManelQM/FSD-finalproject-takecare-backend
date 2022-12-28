    
    
    const express = require ('express'); 
    const db = require ('./db/db'); 
    const router = require ('./router.js'); 
    const app = express();
    const PORT = process.env.PORT || 3000; // Configuramos puerto 

    // Middleware 
   
    app.use(express.json()); 

    //Routes

    app.use(router); 

    //DB Connection 

    app.listen(PORT, () => {
        console.log (`Videodrome portal nº ${PORT }`);
        
        db.then( () => {
            console.log ('Nice to see you again (DB connected)');
        }).catch(error => {
            console.log ('This thing between us its not working: ' + error)
        }) 
    
    })
    

