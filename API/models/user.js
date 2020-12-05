const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username:  {type: String, required: true},
    password:  {type: String, required: true},
    firstName: {type: String, required: true},
    lastName:  {type: String, required: true},
    gender:    {type: String, required: true},
    age:       {type: Number, required: true},
    interests: {type: String, required: true},
});
// ovenstående er tilsvarende til attributterne i en constructor ->  efterfølgende oprettes der her essentielt selve objektet som er baseret på de ovenstående attributter (første parameter er navnet på den "klasse/skema" du opretter -> til internt brug 2. parameter er skemaet du vil bruge til modellen (se oenstående)
module.exports = mongoose.model("User", userSchema)



