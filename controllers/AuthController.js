    
    const { user } = require('../models/index');
    const {
        assertValidPasswordService,
        assertEmailIsValidService,
        assertEmailIsUniqueService,
        createUserService,
        encryptPasswordService,
    } = require("../services/AuthServices");
    require("dotenv").config();
    
    const jsonwebtoken = requier("jsonwebtoken");

    const authRegisterController = async (req,res) => {
        
        const body = req.body;
        try{
            assertValidPasswordService(body.password);
        }catch(error) {
            console.error(error);
            res.status(400).send(`Invalid Password Format, ${error.message}`);
            return;
        }
        
        try {
            assertEmailIsValidService(body.email);
        }catch(error) {
            console.error(error);
            res.status(400).send(`Invalid Email Format, ${error.message}`);
            return;
        }

        try {
            await assertEmailIsUniqueService(body.email);
            console.log("Esto es una API");
        } catch (error) {
            console.error (error);
            res.status(400).send(`Registered Email, please try another one, ${error.message}`);
            return;
        }

        try {
            const UserCreated = await createUserService(body);
            res.status(201).json(UserCreated);
        } catch (error) {
            console.error(error);
            res.status(500).json({message:error.message});
        }
     };


    const authLoginController = async (req,res) => {
        const {email,password} = req.body;
        try{
            const userTarget = await models.User.findONe({
                where:{email:email},
            });
            if (!userTarget) {
                res.status(401).json({message: "Email or Password incorrects"});
                return;
            }

            if (userTarget.deleted == true) {
                res.status(401).json({message: "Access Denied"});
                return;
            }
            
            const hashPassword = encryptPasswordService(password);
            if (hashPassword !== userTarget.password) {
                res.status(401).json({message:"Email or Password invalid"});
                return;
            }

            const secret = process.env.JWT_SECRET;
            if(secret.length < 10) {
                  
            }
         }
    }