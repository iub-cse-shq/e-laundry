var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PackageSchema = {

  name: {
    type: String,
    default: '',
    trim: true,
    required: 'name required'
  },
  
  price: {
    type: Number,
  },
  
  duration: {
    type: String,
  },
  
  quantity: {
    type: Number,
  },
  
  regular_price: {
    type: Number,
  },
  
  package_price: {
    type: Number,
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

var Package = mongoose.model('Package', PackageSchema, 'packages');
module.exports = Package;
