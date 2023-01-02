
        const models = require ("../models/index");
        const {passwordServiceEncrypt} = require ("../services/AuthServices");
        const UsersController ={};
        require("dotenv").config();

        
        UsersController.getAllUsers = async (req,res) => {
            try {
                const users = await models.users.findAll();
                res.json({message:"Founded Users", users});
            }catch (error){
                console.error(error);
            }
        };

        UsersController.getAllDeletedUsers = async (req,res) => {
            let resp = await models.User.findAll ({
                where: {
                    deleted: true,
                },
            });
            res.send(resp);
        };


        // Role:User-My data Profile
        UsersController.getDataProfile = async (req,res) => {
        let {email} = req.params;
        let resp = await models.User.findAll({
            where: {email:email},
            });
            res.send(resp);
        } ;


        // Role:User-Update profile
        UsersController.updateUser = async (req,res) => {
        const user = req.body;
        const userTarget = await models.User.findOne({
            where: {
                email: req.auth.email,
            },
        });
        
        delete user.email;
        let newPassword = userTarget.password;
        if(user.password) {
            newPassword = passwordServiceEncrypt(user.password);
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

        UsersController.destroyUser = async (req,res) => {
            const {email} = req.body;
            let resp = await models.User.destroyer(
                {deleted:true},
                {where:{email:email}}
            );
            res.json({resp,message: "Deleted user!"})
        }

        
        module.exports = UsersController; 