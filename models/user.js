var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userModel = new Schema({
    firstname: {type: String},
    lastname: {type: String},
    email: {type: String},
    password: {type: String},
    verified: {type: Boolean, default:false}
}, {
	versionKey: false
});

module.exports = mongoose.model('User', userModel);