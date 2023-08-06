const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
   user:{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: String,
  userAvatar: String
}, {
  timestamps: true
});

const parkSchema = new Schema({
  name: { type: String, required: true },
  yearVisited: {
    type: Number,
    default: function() {
      return new Date().getFullYear();
    },
  
  },
  parkRating: {
    type: String,
    enum: ['Good', 'Decent', 'Bad', 'Dont Visit', 'Excellent']
  }
  
}, {
  timestamps: true
});


module.exports = mongoose.model('Park', parkSchema);