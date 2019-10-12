const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ItemSchema = new Schema({

  date: Date,
  finished:Array,
  journal:String,
  tasks:Array

})


module.exports = mongoose.model('dayLog',ItemSchema)
