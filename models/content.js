const mongoose = require('mongoose'),
      Course = require('./course'),
      config = require('../config/database');

const ContentSchema = mongoose.Schema({
    course: {
      type: String,
      ref: 'Course'
    },
    content: {
      type: Object
    }

})

const Content = module.exports = mongoose.model('Content', ContentSchema);



module.exports.getCourseContent = function(course, callback){
  const query = {course: course};
  Course.findOne(query, callback);
}
