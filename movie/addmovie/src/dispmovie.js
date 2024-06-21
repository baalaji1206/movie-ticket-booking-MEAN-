var express=require("express");
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/movie');
var db=mongoose.connection;

db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
	console.log("connection succeeded");
})

const productSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true
  },
  name:{
    type:String,
    required:true
  },
  screen: {
    type: String,
    required: true
  },
  ticket: {
    type: String,
    required: true
  },
  path:{
    type:String,
    required:true
  }
 
  
  
});

const movie = mongoose.model('movielists', productSchema);

movie.find().then((lists) => {
   console.log(lists);
}).catch((error) => {
  console.error(error);
});
app.get('/lists', async (req, res) => {
    res.set({
      'Access-Control-Allow-Origin':'*'
    });
    try {
      const products = await movie.find();
      res.json(products);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  });
  app.get('/movie', async (req, res) => {
    res.set({
      'Access-Control-Allow-Origin':'*'
    });
    try {
      const products = await movie.find();
      res.json(products);
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

  }).listen(3200);
