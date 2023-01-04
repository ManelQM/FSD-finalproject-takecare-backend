
        const express = require('express');
        const router = express.Router();
        const {authBeareMiddleware, isValidUser, isValidUserId, isValidRole,} = require('../middlewares/authMiddleware');
        const {
        getAllUsers,
        getAllDeletedUsers,
        destroyUser,
        getDataProfile,
        updateUser
        } = require('../controllers/UsersController');

        // Admin access privileges

        router.get('/users/all',isValidRole("admin"),getAllUsers);
        router.get('/users/delete/all',isValidRole("admin"),getAllDeletedUsers); 
        router.patch('users/delete',isValidRole("admin"),destroyUser);

        //User access privileges

        router.get('users/email',isValidUser(),getDataProfile);
        router.patch('users/update',isValidRole,updateUser); 




        module.exports = router;