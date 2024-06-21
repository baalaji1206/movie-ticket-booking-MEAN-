const express = require('express')
const app = express()
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
var routes = require('./route/routes');
var userModel = require('./src/user/userModel');
const cors=require('cors');
app.use(cors());
app.use(express.json());
app.use(routes);
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));


app.listen(9992,function check(err)
{
    if(err)
    console.log("error")
    else
    console.log("started")
});

mongoose.connect("mongodb://0.0.0.0:27017/sample",{useNewUrlParser: true,  useUnifiedTopology: true },
function checkDb(error)
{
    if(error)
    {
        console.log("Error Connecting to DB");
    }
    else
    {
        console.log("successfully Connected to DB");
    }

});




