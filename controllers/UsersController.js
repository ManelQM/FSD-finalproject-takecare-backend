
    const UsersController ={};
    const models = require ("../models/index");
    const {passwordServiceEncrypt} = require ("../services/AuthServices");


    UsersController.getAllUsers = async (req,res) => {
         let resp = await models.User.findAll(
            {where:{deleted:false,
                     rolename:"user"  
                  },
              }
           );
         res.send(resp);
    };

    UsersController.getAllDeletedUsers = async (req,res) => {
        let resp = await models.User.findAll ({
            where: {
                deleted: true,
            },
        });
        res.send(resp);
    };

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



    module.exports = UsersController; 