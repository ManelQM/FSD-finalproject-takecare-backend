
        const express = require('express');
        const router = express.Router();
        const {authBeareMiddleware, isValidUser, isValidUserId, isValidRole,} = require('../middlewares/authMiddleware');

        const UsersController = require('../controllers/UsersController');

        // Admin access privileges

        router.get('/users/all',isValidRole("admin"),UsersController.getAllUsers);
        router.get('/users/delete/all',isValidRole("admin"),UsersController.getAllDeletedUsers); 
        router.patch('users/delete',isValidRole("admin"),UsersController.destroyUser);

        //User access privileges

        router.get('users/email',isValidUser(),UsersController.getDataProfile);
        router.patch('users/update',isValidRole,UsersController.updateUser); 




        module.exports = router;