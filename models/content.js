const mongoose = require('mongoose'),
      Course = require('./course'),
      config = require('../config/database');

const ContentSchema = mongoose.Schema({
    courseId: {
      type: String,
      ref: 'Course'
    },
    content: {
      type: Object
    }

})

const Content = module.exports = mongoose.model('Content', ContentSchema);



module.exports.getCourseContent = function(courseId, callback){
  Content.findOne({'courseId': courseId}, callback);
}

//initial example course
// var python = new Content({
//   courseId: '58ef3c32d2628a3975e2be72',
//   content: [
//                    {'Lesson 1':  { description: 'Use python for development',
//                                   assignment: 'Name is a variable you assign when you call it will replace your code',
//                                   code: 'def hello(name): print("Hello"name)',
//                                   output:'Hello'
//                    }},
//                    {'Lesson 2':  { description: 'Use HTML for frontend',
//                                   assignment: 'Put your name in <h1> element',
//                                   code: '<h1> </h1>',
//                                   output:'Congrats'
//                    }},
//                    {'Lesson 3':  { description: 'Use Javascript to loop',
//                                   assignment: 'create a function that loops from 0 to 100',
//                                   code: '',
//                                   output:'100'
//                    }}
//                   ]
// })
// python.save(function (err) {
//  if (err) return (err)});
