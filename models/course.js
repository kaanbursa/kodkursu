const mongoose = require('mongoose'),
      Category = require('./category'),
      config = require('../config/database');

const CourseSchema = mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    isViewed: {
      type: Number
    },
    category: Category.CategorySchema,
})

const Course = module.exports = mongoose.model('Course', CourseSchema);
