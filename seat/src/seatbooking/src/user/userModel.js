var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name:{
        type:String,
        required:true

    },
    
    movie:{
        type:String,
        required: true
        
    },
   

    stime: {
        type: String,
        required: true
    },
   
    sdate: {
        type: String,
        required: true
            
    },
    row: {
        type: String,
        required: true
            
    },
    not:{
        type:Number,
        required: true
    }

});

module.exports = mongoose.model('users', userSchema);