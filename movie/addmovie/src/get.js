
var express=require("express");
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/sample');
var db=mongoose.connection;

db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
	console.log("connection succeeded");
})


const s1 = new mongoose.Schema({
    name:{
      type:String,
      required:true
    },
    movie:{
      type:String,
      required:true
    },
    sdate: {
      type: String,
      required: true
    },
    stime: {
      type: String,
      required: true
    },
    not: {
      type: String,
      required: true
    },
    row: {
      type: String,
      required: true,
      
    },
    
  });
  
  const Product = mongoose.model('users', s1);
  app.get('/view', async (req, res) => {
    console.log("requeted 1");
    console.log(req.query.movie);
    
    res.set({
      'Access-Control-Allow-Origin':'*'
    });
    try {
      const result = await Product.find({sdate:req.query.date,movie:req.query.movie},{sdate:1,movie:1,name:1,stime:1,row:1,not:1})
      console.log(result);
      if(result){
        res.json(result)
      }
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  });
  app.get('/',function(req,res){
    res.set({
      'Access-control-Allow-Orgin':'*'
    });

  }).listen(3201);
