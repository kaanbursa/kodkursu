const mongoose = require('mongoose'),
  config = require('../config/database');

// schema of categories of classes
const CategorySchema = mongoose.Schema ({
  parent: {
  type: String,
  ref: 'Category'
},
ancestors: [{
  type: String,
  ref: 'Category'
}]

})

const Category = module.exports = mongoose.model('Category', CategorySchema);
