
        const express = require('express');
        const router = express.Router();
        const {authMiddleware, isValidUser, isValidUserId, isValidRole,} = require('../middlewares/authMiddleware');
        const {
        getAllUsers,
        getAllDeletedUsers,
        destroyUser,
        getDataProfile,
        updateUser,
        userRegister
        } = require('../controllers/UsersController');
        const auth = require('../config/auth');


        // Admin access privileges

        router.get('/all',isValidRole("admin"),getAllUsers);
        router.patch('/delete',isValidRole("admin"), destroyUser);

        //User access privileges



        router.get('/email',isValidUser(), getDataProfile);
        router.patch('/update',isValidUser(), updateUser); 
        router.post("/register", userRegister);



        module.exports = router;