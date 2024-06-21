var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var studentSchema = new Schema({

    name: {
        type: String,
        required: true
    },
   
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('user', studentSchema);