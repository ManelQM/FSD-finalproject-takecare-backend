
        const express = require('express');
        const router = express.Router();
        const {authBeareMiddleware, isValidUser, isValidUserId, isValidRole,} = require('../middlewares/authMiddleware');
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

        router.get('/all',getAllUsers);
        router.patch('/delete',destroyUser);

        //User access privileges



        router.get('/email',getDataProfile);
        router.patch('/update',updateUser); 
        router.post("/register", userRegister);



        module.exports = router;