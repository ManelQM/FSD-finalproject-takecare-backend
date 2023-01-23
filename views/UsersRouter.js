const express = require('express');
const router = express.Router();


const authMiddleware = require("../middlewares/authMiddleware");
const {isValidRole, isValidUser} = require("../middlewares/auth"); 
       
const {
  getAllUsers,
  destroyUser,
  getMyProfile,
  updateUser,
  userRegister
} = require('../controllers/UsersController');


        // Admin access privileges

        router.get('/all',getAllUsers);
        router.patch('/delete', destroyUser);

        //User access privileges

        router.get('/profile/:email', getMyProfile);
        router.patch('/update', authMiddleware,  updateUser); 
        router.post('/register', userRegister);



        module.exports = router;