const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const games = require('./routes/api/goals');
const app = express();
app.set('json spaces', 2)


app.use(bodyParser.json());

app.get('/test', (req,res)=>{
  console.log('dd')
  res.send('test is workout')
})



const url = 'mongodb://localhost:27017/goal'
mongoose.connect(url)
.then(()=>console.log('connected'))


app.use('/',games);
const port = 5000;
app.listen(port,()=>console.log(`started port ${port}` ));
