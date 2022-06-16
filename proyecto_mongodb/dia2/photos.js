const  mongoose = require('mongoose');

const photosSchema = new mongoose.Schema({
    name: String, 
    url: String,
    titulo: String,
    descripcion: String,
})

module.exports = mongoose.model('photos', photosSchema, 'photos')