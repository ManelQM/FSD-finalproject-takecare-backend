const express = require('express');
const router = express.Router();

const authentic = require("../middlewares/authMiddleware");
       
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

        router.get('/email/:email', authentic, getMyProfile);
        router.patch('/update', authentic,  updateUser); 
        router.post('/register', userRegister);



        module.exports = router;