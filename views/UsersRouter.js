
    const express = require('express');
    const router = express.Router();
    const {authBeareMiddleware, isValidUser, isValidUserId, isValidRole,} = require('../middlewares/authMiddleware');

    const UsersController = require('../controllers/UsersController');

    // Admin access privileges

    router.get('/all',isValidRole("admin"),UsersController.getAllUsers);
    router.get('all',isValidRole("admin"),UsersController.getAllDeletedUsers); 
    router.patch('/delete',isValidRole("admin"),UsersController.destroyUser);

    //User access privileges

    router.get('/email',isValidUser(),UsersController.getDataProfile);
    router.patch('/update',isValidRole,UsersController,updateUser); 
    
    
    
    module.exports = router;