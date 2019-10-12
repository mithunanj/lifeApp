const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ItemSchema = new Schema({

  name:String,
  date: Date,
  habits:Array,
  Milestones:Array,
  details:String

})


module.exports = mongoose.model('goal',ItemSchema)
