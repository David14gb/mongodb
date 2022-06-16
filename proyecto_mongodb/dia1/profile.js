
const  mongoose = require('mongoose');

const ProfilesSchema = new mongoose.Schema({
    name: String, 
    surname: String,
    dateOfBirth: Number,
    comments: String,
    rol: String
})

module.exports = mongoose.model('profile', ProfilesSchema, 'Perfil')