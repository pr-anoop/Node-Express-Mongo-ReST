var bcrypt = require('bcrypt'),
	Q = require('q'),
	SALT_ROUNDS = 10;


var security = function () {

	return {

		encode: function(password) {
			var deferred = Q.defer();

			bcrypt.genSalt(SALT_ROUNDS, function(err, salt) {
				if(err) deferred.reject();

				bcrypt.hash(password, salt, function(err, hash) {
					if(err || !hash)
						deferred.reject();
					else
						deferred.resolve(hash);
				});
			});

			return deferred.promise;
		},

		compare: function(password, hash) {
			var deferred = Q.defer();

			bcrypt.compare(password, hash, function(err, valid) {
				if (err || !valid) 
					deferred.reject();
				else
					deferred.resolve(valid);
			});

			return deferred.promise;
		}

	}

}

module.exports = security;