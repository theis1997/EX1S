const User = require("/Users/theis/Desktop/Studierelateret/Programering:Udvikling Af Smaa Systemer/Examensopgave 1.semester/Dating_App_EX/Model/User.js");

function userController(req,res){
    res.json(User.userArray);
}

module.exports = userController; 