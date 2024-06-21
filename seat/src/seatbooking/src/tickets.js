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

const productSchema = new mongoose.Schema({
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

const Product = mongoose.model('users', productSchema);

Product.find().then((products) => {
   console.log(products);
}).catch((error) => {
  console.error(error);
});
app.post('/products', async (req, res) => {
  
    res.set({
      'Access-Control-Allow-Origin':'*'
    });
    try {
      console.log("hi");
      console.log(req.body.not)
      const products = await Product.find({"movie":req.body.not,"sdate":req.body.sdate},{"id":1,"stime":1,"name":1,"row":1,"not":1});
      res.json(products);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  });
  app.post('/view', async (req, res) => {
    console.log("requetsde");
    console.log(req.body);
    res.set({
      'Access-Control-Allow-Origin':'*'
    });
    try {
      const result = await Product.find({sdate:"19 April"},{sdate:1,movie:1,name:1,stime:1,row:1,not:1})
      if(result){
        res.json(result)
      }
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  });
  
  // const port = 3000;
  // app.listen(port, () => {
    
  //   console.log(`Server running on port ${port}`);
  // });
  
  app.get('/',function(req,res){
    res.set({
      'Access-control-Allow-Orgin':'*'
    });

  }).listen(3001);
