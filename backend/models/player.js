const mongoose = require("mongoose")
const playerSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    post: String,
    team: String,
    nTshirt: String,
    dateOfBirth: String

})
const player = mongoose.model('Player', playerSchema)
module.exports = player;