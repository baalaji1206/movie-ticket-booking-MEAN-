var userModel = require('./userModel');
var key = '123456789trytryrtyr';
var encryptor = require('simple-encryptor')(key);
 
module.exports.createuserDBService = (userDetails) => {
 

   return new Promise(function myFn(resolve, reject) {
 
       var userModelData = new userModel();
        userModelData.movie=userDetails.movie;
        userModelData.stime = userDetails.stime;
        userModelData.sdate = userDetails.sdate;
        userModelData.row = userDetails.row;
        userModelData.not = userDetails.not;
        userModelData.name = userDetails.name;
 
       userModelData.save(function resultHandle(error, result) {
 
           if (error) {
               console.log(error);
           } else {
               resolve(true);
           }
       });
 
   });
 
}

