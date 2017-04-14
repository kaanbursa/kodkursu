const mongoose = require('mongoose'),
      Content = require('./content'),
      User = require('./content'),
      fs = require('fs'),
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
    syllabus: {
      type: Object
    },
    content: {
      type: String,
      ref: 'Content'
    },
    student: {
      type: Number,
      ref: 'User'
    }
})


const Course = module.exports = mongoose.model('Course', CourseSchema);

// image for courses
// const sql = './assets/sql.png';
// const web = './assets/makeaWebsite@2x.png';
// const js = './assets/javascript@2x.png';
// const ruby = './assets/ruby@2x.png';
// //Initial datas
// var webdeveloper = new Course({ title : 'Full-Stack Web Developer',
//           description : 'Become a web developer, manage backend and create beautiful UI for your web',
//           syllabus : [
//                 {'Front End':  'It starts with a page.. Learn HTML/CSS basics to create beautiful UI for your website.'},
//                 {Python: 'Learn Python syntaxes and its vast posibilities. Get familiar with variables, functions, classes and more... '},
//                 {Database: 'Manage the data you have and store it to your server. Get users data stored too!'},
//                 {HTTP: 'Time to wire up your front-end and backend with HTTP protocol'},
//                 {Javascript: 'Time to make the website interactive with some scripting language.'}
//                ]
//  });
// webdeveloper.image.data = fs.readFileSync(web);
//  webdeveloper.image.contentType = 'image/png';
//
//  var dataanalyst = new Course({ title : 'Data-Analyst',
//            description : 'One of the best jobs in the 21st century. Learn why stuff happens and predict the future!.',
//            syllabus : [
//                  {'Data Analytics':  'How data analytics work what are some stuff you should be familiar with and the best tools you need.'},
//                  {Python: 'Learn Python syntaxes and its vast posibilities. Get familiar with variables, functions, classes and more... '},
//                  {Databases: 'SQL & NoSQL. Manage two types of databases and learn their vast capabilities!'},
//                  {'Image-Recognition': 'Time to create a software that recognizes people by feeding the software with images!'}
//                 ]
//   });
//
// dataanalyst.image.data = fs.readFileSync(sql);
//  dataanalyst.image.contentType = 'image/png';
//
//   var uiux = new Course({ title : 'UI/UX Designer',
//             description : 'Understand human behavior and your customer and make the web site usable by anyone',
//             syllabus : [
//                   {'HTML and CSS':  'Create web pages with beautiful designs.'},
//                   {'Animations': 'Make animations on your website using Jquery and other Javascript libraries!'},
//                   {'User Behavior': 'Learn your customers behavior an design the website according to the behavior'},
//                   {SASS: 'Create some very cool websites with the power of SASS'}
//                  ]
//    });
//
// uiux.image.data = fs.readFileSync(ruby);
//  uiux.image.contentType = 'image/png';
//
//    var android = new Course({ title : 'Android Developer',
//              description : 'Get familiar with Android development and create smartphone apps!',
//              syllabus : [
//                    {Java:  'Create web pages with beautiful designs.'},
//                    {MVC: 'Learn the model that manages the smartphone development!'},
//                    {Ionic: 'Learn your customers behavior an design the website according to the behavior'},
//                    {Design: 'Create some very cool websites with the power of SASS'}
//                   ]
//     });
//
// android.image.data = fs.readFileSync(js);
//  android.image.contentType = 'image/png';
//
// webdeveloper.save(function (err) {
//   if (err) return (err)});
//
// android.save(function (err) {
//     if (err) return (err)});
// uiux.save(function (err) {
//       if (err) return (err)});
// dataanalyst.save(function (err) {
//         if (err) return (err)});

module.exports.getCourses = function(callback){
  Course.find({}, callback);
}

module.exports.getCourseById = function(id, callback){
  Course.findById(id, callback);
}
