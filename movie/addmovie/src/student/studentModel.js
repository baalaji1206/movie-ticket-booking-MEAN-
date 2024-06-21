var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var studentSchema = new Schema({

    name: {
        type: String,
        
    },
   
    screen: {
        type: Number,
     
    },
    ticket: {
        type: Number,
        
    },
    path:{
        type:String
    }
});

module.exports = mongoose.model('movielists', studentSchema);