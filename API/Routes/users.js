const express = require("express");
const router = express.Router();


// nedenstående skal bare være ("/") fordi linjen: app.use("/users",userRoutes); henviser alle requests om users/users endpointet i url'en henvises  til denne fil go ska lderfor ikke henvises videre da denne controller er "sidste stop" -> tager sig af hvor der skal hentes/sendes

router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Handling GET requsts to /Users"

    });

});

router.post("/", (req, res, next) => {
    res.status(200).json({
        message: "Handling POST requsts to /Users"

    });

});
// kolon efterfulgt af id
router.get("/:username", (req, res, next) => {
    const id = req.params.username;
    if (id === "Theis1997") {
        res.status(200).json({
            message: "You loggeed into user: Theis1997",
            id: id
        });
    } else {
        res.status(200).json({
            message: "You passed an other ID than Theis1997"

        });
    }

});

router.patch("/:username", (req, res, next) => {
    res.status(200).json({
        message: "Updated product!"
    });
});


router.delete("/:username", (req, res, next) => {
    res.status(200).json({
        message: "Deleted product!"
    });
});







module.exports = router;












//gammel kode 

//const User = require("/Users/theis/Desktop/Studierelateret/Programering:Udvikling Af Smaa Systemer/Examensopgave 1.semester/Dating_App_EX/Model/User.js");

//function userController(req,res){
    //res.json(User.userArray);
//}

//module.exports = userController; 