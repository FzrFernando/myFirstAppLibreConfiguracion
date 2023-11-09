const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AthleteSchema = new Schema({
    name: String,
    age: Number
})

module.exports = mongoose.model("Athlete", AthleteSchema);
