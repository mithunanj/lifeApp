const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Goal = require('../../models/goal');
const Task = require('../../models/task');
const DayLog = require('../../models/dayLog');

const moment = require('moment');


var first = new Goal({name:'10 pounds',date:'2019-98',habits:['calories','test'],milestones:['happu,sfd']})
router.get('/goals',(req,res)=>{


  Goal.find({})
    .then(result =>res.send(result))



})
router.get('/tasks',(req,res)=>{
  Task.find({})
    .then(result => res.json(result))
})
router.post('/task',(req,res)=>{
  var task = new Task(req.body)
  console.log(req.body)
  task.save()
    .then(results =>res.json(results))

})
router.get('/delete',(req,res)=>
  Goal.deleteOne({name:'10 pounds'})
    .then(results => console.log(results))
  )

router.post('/goal',(req,res)=>{
  var goal = new Goal(req.body)
  goal.save()
    .then(result => res.json(result))})

router.post('/remove',(req,res)=>{
  console.log('deleteing')
  Goal.deleteOne({_id:req.body._id})
    .then(results => res.send(results))
})

router.post('/update',(req,res)=>{
  console.log(req.body)
  Goal.updateOne({_id:req.body._id},req.body)
    .then(results=>res.send(results))
})

router.post('/day',(req,res)=>{

  console.log(req.body)
  DayLog.updateOne({_id:req.body._id},req.body)
    .then(results=>res.json(results))
})


router.get('/start',(req,res)=>{
  var start = moment().startOf('day');
  var date = new Date()
  var end = moment(date).endOf('day');
  console.log(date)
  DayLog.findOne({ date: { '$gte': start, '$lte': end }})
    .then(results => res.json(results))


})

router.post('/new/day',(req,res)=>{
  var start = moment().startOf('day');
  var date = new Date()
  var end = moment(date).endOf('day');
  var day = new DayLog({date:date,finished:[],journal:"",tasks:req.body})
  console.log(req.body)
  day.save().then(
    results =>res.json(results)
  )
})




module.exports = router;
