const mongoose = require ("mongoose");

const UserSchema = new mongoose.Schema({
    login: String, 
    password: String
})



const CreedentialsSchema = new mongoose.Schema({
    addres: String,
    phone: Number,
    email: String
})


module.exports = mongoose.model("User", UserSchema)
module.exports = mongoose.model("Creedentials", CreedentialsSchema)