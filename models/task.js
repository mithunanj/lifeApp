const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ItemSchema = new Schema({

  title:String,
  startDate: Date,
  endDate:Date,
  allDay:Boolean,
  finished:Boolean,
  id:Number


})


module.exports = mongoose.model('task',ItemSchema)
