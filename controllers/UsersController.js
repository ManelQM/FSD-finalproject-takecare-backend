
        const models = require ("../models/index");
        const {encryptPasswordService } = require ("../services/AuthServices");
        require("dotenv").config();

        const {
          assertValidPasswordService,
          assertEmailIsValidService,
          assertEmailIsUniqueService,
          createUserService
        } = require("../services/AuthServices");
        require("dotenv").config();
        

        const getAllUsers = async (req,res) => {
            try {
                const users = await models.User.findAll();
                res.json({message:"Founded Users", users});
            }catch (error){
                console.error(error);
            }
        };

        const getAllDeletedUsers = async (req,res) => {
            let resp = await models.User.findAll ({
                where: {
                    deleted: true,
                },
            });
            res.send(resp);
        };


        // Role:User-My data Profile
        const getDataProfile = async (req,res) => {
        let {email} = req.params;
        let resp = await models.User.findAll({
            where: {email:email},
            });
            res.send(resp);
        } ;


        // Role:User-Update profile
        const updateUser = async (req,res) => {
        const user = req.body;
        const userTarget = await models.User.findOne({
            where: {
                email: req.auth.email,
            },
        });
        
        delete user.email;
        let newPassword = userTarget.password;
        if(user.password) {
            newPassword = encryptPasswordService (user.password);
        }

        let resp = await models.User.update(
            {
                name:user.name,
                nickname:user.nickname,
                password:newPassword,
            },
            {
                where: {email:req.auth.email},
            },
        );
        res.json({
            resp,
            message:"Updated User",
          });
        }; 



        //Role:Admin-Delete user

        const destroyUser = async (req,res) => {
            const {email} = req.body;
            let resp = await models.User.destroyer(
                {deleted:true},
                {where:{email:email}}
            );
            res.json({resp,message: "Deleted user!"})
        }
 
        const userRegister = async (req, res) => {

            const body = req.body;
            try {
              assertValidPasswordService(body.password); //esto valida el password
            } catch (error) {
              console.error(error);
              res.status(400).send(`Invalid Password Format, ${error.message}`);
              return;
            }
          
            try {
              assertEmailIsValidService(body.email);
            } catch (error) {
              console.error(error);
              res.status(400).send(`Invalid Email Format, ${error.message}`);
              return;
            }
          
            try {
              await assertEmailIsUniqueService(body.email);
              console.log("Not valid");
            } catch (error) {
              console.error(error);
              res
                .status(400)
                .send(`Registered Email, please try another one, ${error.message}`);
              return;
            }
          
            try {
              const UserCreated = await createUserService(body);
              res.status(201).json(UserCreated);
            } catch (error) {
              console.error(error);
              res.status(500).json({ message: error.message });
            }
          };

        
            module.exports = {
            getAllUsers,
            getAllDeletedUsers,
            destroyUser,
            getDataProfile,
            updateUser,
            userRegister};