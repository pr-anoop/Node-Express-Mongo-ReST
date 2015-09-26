var userContoller = function(User) {
	/**
	 * @api {get} /users List all users
	 * @apiVersion 1.0.0
	 * @apiName GetUsers
	 * @apiGroup Users
	 *
	 * @apiSuccessExample {json} Success-Response:
	 *     HTTP/1.1 200 OK
	 *     [{"_id": 1234567890,
	 *       "firstname": "John",
	 *       "lastname": "Doe",
	 *       "email": "john.doe@example.com"
	 *       "verified": false
	 *     },{"_id": 1234567890,
	 *       "firstname": "John",
	 *       "lastname": "Doe",
	 *       "email": "john.doe@example.com"
	 *       "verified": false
	 *     }]
	*/
	var listUsers = function(req, res) {
		User.find({}, function(err,users){
            if(err)
                res.status(500).send(err);
            else
                res.json(users);
        });
	}

	/**
	 * @api {post} /users Create user
	 * @apiVersion 1.0.0
	 * @apiName CreateUser
	 * @apiGroup Users
	 * @apiParamExample {json} Request-Example:
	 *     {
	 *       "firstname": "John",
	 *       "lastname": "Doe",
	 *       "email": "john.doe@example.com",
	 *       "password": "my-password",
	 *       "verified": false
	 *     }	 
	 * @apiSuccessExample {json} Success-Response:
	 *     HTTP/1.1 201 OK
	 *     { 
	 *       "_id": "1234567890",
	 *       "firstname": "John",
	 *       "lastname": "Doe",
	 *       "email": "john.doe@example.com",
	 *       "verified": false 
	 *     }
	*/
	var createUser = function(req, res) {
		var user = new User(req.body);
        user.save();
        res.status(201).send(user);
	}

	/**
	 * @api {get} /users/:id Get user by ID
	 * @apiVersion 1.0.0
	 * @apiName GetUserById
	 * @apiGroup Users
	 * @apiParam {String} id Users unique ID.
	 *
	 * @apiSuccessExample {json} Success-Response:
	 *     HTTP/1.1 200 OK
	 *     { 
	 *       "_id": "1234567890",
	 *       "firstname": "John",
	 *       "lastname": "Doe",
	 *       "email": "john.doe@example.com",
	 *       "verified": false 
	 *     }
	*/
	var getUser = function(req, res) {
		res.status(200).json(req.user);
	}

	/**
	 * @api {put} /users/:id Update User
	 * @apiVersion 1.0.0
	 * @apiName UpdateUser
	 * @apiGroup Users
	 * @apiParam {String} id Users unique ID.
	 *
	 * @apiParamExample {json} Request-Example:
	 *     {
	 *       "firstname": "John",
	 *       "lastname": "Doe",
	 *       "email": "john.doe@example.com",
	 *       "password": "my-password",
	 *       "verified": false
	 *     }	
	 *
	 * @apiSuccessExample {json} Success-Response:
	 *     HTTP/1.1 200 OK
	 *     { 
	 *       "_id": "1234567890",
	 *       "firstname": "John",
	 *       "lastname": "Doe",
	 *       "email": "john.doe@example.com",
	 *       "verified": false 
	 *     }
	*/
	var updateUser = function(req, res) {
		req.user.firstname = req.body.firstname;
        req.user.lastname = req.body.lastname;
        req.user.email = req.body.email;
        req.user.password = req.body.password;
        req.user.verified = req.body.verified;
        req.user.save(function(err){
            if(err)
                res.status(500).send(err);
            else{
                res.json(req.user);
            }
        });
	}

	/**
	 * @api {patch} /users/:id Patch User
	 * @apiVersion 1.0.0
	 * @apiName PatchUser
	 * @apiGroup Users
	 * @apiParam {String} id Users unique ID.
	 *
	 * @apiParamExample {json} Request-Example:
	 *     {
	 *       "verified": true
	 *     }	
	 *
	 * @apiSuccessExample {json} Success-Response:
	 *     HTTP/1.1 200 OK
	 *     { 
	 *       "_id": "1234567890",
	 *       "firstname": "John",
	 *       "lastname": "Doe",
	 *       "email": "john.doe@example.com",
	 *       "verified": true 
	 *     }
	*/
	var patch = function(req, res) {
		if(req.body._id)
            delete req.body._id;

        for(var p in req.body) {
            req.user[p] = req.body[p];
        }

        req.user.save(function(err) {
            if(err) {
                res.status(500).send(err);
            } else {
                res.json(req.user);
            }
        });
	}

	/**
	 * @api {delete} /users/:id Delete User
	 * @apiVersion 1.0.0
	 * @apiName DeleteUser
	 * @apiGroup Users
	 * @apiParam {String} id Users unique ID.
	*/
	var remove = function(req, res) {
		req.user.remove(function(err){
	        if(err)
	            res.status(500).send(err);
	        else{
	            res.status(204).send("User removed");
	        }
	    });
	}


	var middleware = function(req, res, next) {
		User.findById(req.params.id, function(err,user){
            if(err)
                res.status(500).send(err);
            else if(user) {
                req.user = user;
                next();
            } else {
                res.status(404).send('User not found');
            }
        });
	}

	return {
		list: listUsers,
		create: createUser,
		get: getUser,
		update: updateUser,
		patch: patch,
		remove: remove,
		middleware: middleware
	}
}

module.exports = userContoller;