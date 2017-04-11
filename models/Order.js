var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var OrderSchema = {

  name: {
    type: String,
    default: '',
    trim: true,
    required: 'name required'
  },

  email: {
    type: String,
    default: '',
    trim: true,
    required: 'email required'

  },

  contactno: {
    type: Number,
     required: 'contactno required'
  },
  address:{
    type:String,
    default: '',
    trim:true,
    required:'address required'
  },
  area:{
    type:String,
    default:'',
    trim:true,
    required:'area required'
  },
  pickupDate:{
    type:Date,
    default:Date.now,
    
    required:'pickupDate required'
  },
  pickupTime:{
    type:String,
    default:'',
    required:'pickupTime required'

  },
  purchagePackage:{
    name:{
      type: String
    },
    price:{
      type:Number
    },
    duration:{
      type:String
    },
    quantity: {
     type: Number
   }
    
  },
  socialNotes:{
    type:String,
  },
  
  items:[{
   service:{
      type: Schema.ObjectId,
    ref: 'Service'
   },
  package:{
      type: Schema.ObjectId,
    ref: 'Package'
   },
   quantity: {
     type: Number
   }
   
  }]

}
var Order = mongoose.model('Order', OrderSchema, 'orders');
module.exports = Order;
