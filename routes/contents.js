const express = require('express');
const router = express.Router();
const config = require('../config/database');

const Content = require('../models/content');

router.get('/content/:id', (req, res) =>{
  var courseId = req.params.id.toString()
  const contentId = req.params.contentId
  Content.getCourseContent(courseId, (err, course)=>{
    if(err) throw err;
    res.send({course: course})
  })
})

router.get('/content/:id/:contentId', (req, res) =>{
  var courseId = req.params.id.toString()
  const contentId = req.params.contentId
  Content.getCourseContent(courseId, (err, course)=>{
    if(err) throw err;
    res.send(course.content[contentId])
  })
})


module.exports = router;
