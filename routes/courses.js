const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');


const Course = require('../models/course');


router.get('/catalog', (req, res, next) => {
  Course.getCourses((err, courses) => {
    if (err) throw err;
    console.log(courses);
    res.send(courses)
  });
})

module.exports = router;
