var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ServiceSchema = {

  title: {
    type: String,
    default: '',
    trim: true,
    required: 'Title required'
  },

  content: {
    type: String,
    default: '',
    trim: true,
    required: 'Content required'

  },

  men:{
    type: String,
    default: '',
    trim: true,
    required: 'Content required'
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },

  created: {
    type: Date,
    default: Date.now
  }
}

var Service = mongoose.model('Service', ServiceSchema, 'services');
module.exports = Service;
