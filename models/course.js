const mongoose = require('mongoose'),
      Category = require('./category'),
      config = require('../config/database');

const CourseSchema = mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    image: {
       data: Buffer,
       contentType: String,
     },
    price: {
      type: Number
    },
    isViewed: {
      type: Number
    },
    description: {
      type: String,
      required: true
    },
    // category: {
    //   type: String, ref: 'Category'
    // },
    syllabus: {
      type: Object
    },
    content: {
      type: Object
    }
})

const Course = module.exports = mongoose.model('Course', CourseSchema);


// var python = new Course({ title : 'Python',
//           description : 'Learn python and its vast modules',
//           syllabus : { week1 :  'learn python syntax',
//                 week2: 'Its all about functions',
//                 week3: 'Python Classes',
//                 week4 : 'Python and Data'}} );
//
// python.save(function (err) {
//   if (err) return (err)});

module.exports.getCourses = function(callback){
  Course.find({}, callback);
}

module.exports.getCourseById = function(id, callback){
  Course.findById(id, callback);
}
