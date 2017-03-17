const mongoose = require('mongoose'),
      Category = require('./category'),
      config = require('../config/database');

const CourseSchema = mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    image: {
       data: Buffer, contentType: String
     },
    price: {
      type: Number,
      required: true
    },
    isViewed: {
      type: Number
    },
    category: String
})

const Course = module.exports = mongoose.model('Course', CourseSchema);


module.exports.getCourses = function(callback){
  Course.find({}, callback);
}

module.exports.getCourseByName = function(name, callback){
  var query = {name: name}
  Course.findOne(query, callback);
}
