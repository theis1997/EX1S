var express = require("express");
var app = express();




const userRouter = require("./API/Routes/users");
const matchRouter = require("./API/Routes/match");



app.use("/Users",userRouter);
app.use("/Match",matchRouter);

 app.use ((req, res, next ) => {
     const error = new Error("Not found");
     error.status = 404;
     next(error);
 })

module.exports = app;
