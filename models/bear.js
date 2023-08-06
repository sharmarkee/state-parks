const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bearSchema = new Schema ({
  name: String,
  sighting: Date,

})


module.exports = mongoose.model('Bear', bearSchema)