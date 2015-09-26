var express = require('express');

var routes = function(){
    var authorRouter = express.Router();

    authorRouter.route('/')
    	.get(function(req, res) {
    		res.status(200).send("Author Route");
    	});
    return authorRouter;
}


module.exports.routes = routes;
module.exports.baseUrl = '/authors';