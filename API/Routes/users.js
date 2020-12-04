const express = require("express");
const router = express.Router();
const mongoose = require("mongoose")

const User = require("../models/user.js") // user klassen/skema importeres fra fra user-modelfilen


//importerede controllerFunctions:
//const userController = require("/Users/theis/Desktop/studierelateret/Programering:Udvikling Af Smaa Systemer/Examensopgave 1.semester/Dating_App_EX/Controllers/Users.js");
//const matchController = require("./Controllers/Match.js"); //mangler at blive konstrueret



// nedenstående skal bare være ("/") fordi linjen: app.use("/users",userRoutes); henviser alle requests om users/users endpointet i url'en henvises  til denne fil go ska lderfor ikke henvises videre da denne controller er "sidste stop" -> tager sig af hvor der skal hentes/sendes

// overvej om denne funktion skal specificeres så der kan findes alle kvindelige eller alle mandlige bruger udelukkende
router.get("/", (req, res, next) => {
   User.find()
    .exec()
    .then(docs => {
        console.log(docs);
        res.status(200).json(docs);
        if (docs.length >= 0) {
            res.status(200).json()
        } else {
            res.status(404).json({
                message: "No User entries found"
            });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.post("/", (req, res, next) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gender: req.body.gender,
        age: req.body.age,
        interests: req.body.interests
    });
    user
        .save()
        .then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));
    res.status(200).json({
        message: "Handling POST requests to /Post",
        createdUser: user
    });
});



// kolon efterfulgt af id
router.get("/:userId", (req, res, next) => {
    const id = req.params.userId;
    User.findById(id)
      .exec()
      .then(doc => {
        console.log("From database", doc);
        if (doc) {
          res.status(200).json(doc);
        } else {
          res
            .status(404)
            .json({ message: "No valid user found corresponding with provided ID" });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
      });
  });

router.patch("/:userId", (req, res, next) => {
    const id = req.params.userId;
    const updateOps = {};
    for (const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    User.update({_id: id}, {$set: updateOps}) //der ændres på objektet der refereres til med et givent id (ændres kun på objekter der opfylder id-kriteriet) . Her bruges propertyen $set, (mongoose) til at ændre json-objektet ud fra det value/key-set som er defineret i objektets schema/klasse //Eller som i nuværende kode: js-Objektet updateOps oprettes og der loopes igennem alle req.body operations -  req.body opfattes som array
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});
// Der kan med denne metode patches enkelte values af gangen i stedet for at patche alle values


router.delete("/:userId", (req, res, next) => {
    const id = req.params.userId;
    User.remove({_id: id})
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

module.exports = router;





//gammel kode 

//const User = require("/Users/theis/Desktop/Studierelateret/Programering:Udvikling Af Smaa Systemer/Examensopgave 1.semester/Dating_App_EX/Model/User.js");

//function userController(req,res){
    //res.json(User.userArray);
//}

//module.exports = userController; 





