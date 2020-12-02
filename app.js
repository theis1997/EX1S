var express = require("express");
var app = express();
const PORT = 3001;
var bodyParser = require("body-parser"); // Bruges til at parse bodies kan båe URL og JSON format


const userRouter = require("./API/Routes/users");
const matchRouter = require("./API/Routes/match");



app.use(bodyParser.urlencoded({extended: false})); // extended er her false fordi vi ikke har brug for at sende extended bodies med rich data (true) -> slå rich data op 
app.use(bodyParser.json());

//Rigtige headers sendes til browseren (inden koden når til routes -> der sendes requests) -> så browseren der kører på en anden PORT/local host tillades adgang til serveren
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Acess-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Acces-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
       return res.status(200).json({});
    }
    next();
});

app.use("/Users",userRouter); 
app.use("/Match",matchRouter);



app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});




app.listen(PORT); 
console.log("Server is active and listening on port 3001 - yay!");