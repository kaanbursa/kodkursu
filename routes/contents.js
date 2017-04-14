const express = require('express');
const router = express.Router();
const config = require('../config/database');

const Content = require('../models/content');

router.get('/content/:id', (req, res) =>{
  var courseId = req.params.id
  Content.getCourseContent(courseId, (err, course)=>{
    res.send(course)
  })
})


module.exports = router;
