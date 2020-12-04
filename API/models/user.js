const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    gender: String,
    age: Number,
    interests: String
});
// ovenstående er tilsvarende til attributterne i en constructor ->  efterfølgende oprettes der her essentielt selve objektet som er baseret på de ovenstående attributter (første parameter er navnet på den "klasse/skema" du opretter -> til internt brug 2. parameter er skemaet du vil bruge til modellen (se oenstående)
module.exports = mongoose.model("User", userSchema)



