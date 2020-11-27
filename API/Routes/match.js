const express = require("express");
const router = express.Router();



// denne er ikke relevant da en bruger ikke skal have adgang til alle matches i systemet (eller måske er den pga. alt info skal sendes til clienten når serveren starter???)

router.get("/",(req, res, next) => {
    res.status(200).json({
        message: "All matches were fetched"
    });

});

router.get("/:matchId",(req, res, next) => {
    res.status(200).json({
        message: "Match was fetched",
        matchId: req.params.matchId
    });
});

router.post("/:matchId",(req, res, next) => {
    res.status(200).json({
        message: "Match was posted",
        matchId: req.params.matchId
    });
});

router.delete("/:matchId",(req, res, next) => {
    res.status(200).json({
        message: "Match was deleted",
        matchId: req.params.matchId
    });
});







module.exports = router;