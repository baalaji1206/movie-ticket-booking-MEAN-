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
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true
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
app.get('/products', async (req, res) => {
    res.set({
      'Access-Control-Allow-Origin':'*'
    });
    try {
      const products = await Product.find();
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

  }).listen(3000);
