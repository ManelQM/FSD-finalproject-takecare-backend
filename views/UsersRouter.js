  const express = require('express');
        const router = express.Router();
        const {authMiddleware, isValidUser, isValidUserId, isValidRole,} = require('../middlewares/authMiddleware');
        const {
        getAllUsers,
        destroyUser,
        getMyProfile,
        updateUser,
        userRegister
        } = require('../controllers/UsersController');
        const auth = require('../config/auth');


        // Admin access privileges

        router.get('/all',getAllUsers);
        router.patch('/delete', destroyUser);

        //User access privileges



        router.get('/email', getMyProfile);
        router.patch('/update', updateUser); 
        router.post("/register", userRegister);



        module.exports = router;