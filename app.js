var express = require("express");
var app = express();




const userRouter = require("./API/Routes/users");
const matchRouter = require("./API/Routes/match");



app.use("/Users",userRouter);
app.use("/Match",matchRouter);

 

module.exports = app;
