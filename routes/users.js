'use strict';

var express = require('express'),
    User = require('../models/user');

var routes = function() {
    var userRouter = express.Router();
    var controller = require('../controllers/userController')(User);

    userRouter.route('/')
        .post(controller.create)
        .get(controller.list);

    userRouter.use('/:id', controller.userById);

    userRouter.route('/:id')
        .put(controller.update)
        .patch(controller.patch)
        .delete(controller.remove)
        .get(controller.get);

    return userRouter;
}

module.exports.routes = routes;
module.exports.baseUrl = '/users';