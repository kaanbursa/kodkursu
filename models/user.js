const mongoose = require('mongoose'),
		bcrypt = require('bcryptjs'),
		config = require('../config/database'),
		Course = require('./course');

// User Schema
const  UserSchema = mongoose.Schema ({
	name: {
		type: String
	},
	email: {
		type: String,
		required: true,
		lowercase: true
	},
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	courses: [{
		type: mongoose.Schema.ObjectId,
		ref: 'Course'
	}]

});

const User = module.exports = mongoose.model('User', UserSchema);


module.exports.getUserById = function(id, callback){
	User.findById(id)
	.populate('courses')
	.exec(callback);
}

module.exports.getUserByUsername = function(username, callback){
	const query = {username: username}
	User.findOne(query, callback)
}


module.exports.addUser = function(newUser, callback){
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(newUser.password, salt, (err, hash) => {
			if(err) throw err;
			newUser.password = hash;
			newUser.save(callback);
		});
	});
}

module.exports.attendCourse = function(userId, newCourse, callback){
	User.update({_id: userId },
			 {$push: { 'courses' : newCourse }} , {upsert:true, new: true, setDefaultsOnInsert: true}, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
	bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
		if(err) throw err;
		callback(null, isMatch);
	});

}
