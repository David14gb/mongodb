const {Schema, model} = require("mongoose");

const photosSchema = new Schema({
    name: String, 
    url: String,
    titulo: String,
    descripcion: String,
})

module.exports = model('photos', photosSchema, 'photos')