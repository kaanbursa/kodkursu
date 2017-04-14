const express = require('express');
const router = express.Router();
const config = require('../config/database');

const Course = require('../models/course');


router.get('/catalog', (req, res, next) => {
  Course.getCourses((err, courses) => {
    if (err) throw err;
    res.send(courses)
  });
})



router.get('/syllabus/:id', (req, res, next) => {
  Course.getCourseById(req.params.id, (err,course) => {
    if (err) throw err;
    res.send(course)
  })
})



module.exports = router;
