const {Schema, model} = require("mongoose");

const profesionalesSchema = new Schema({
    name: String, 
    edad: Number,
    genero: String,
    nacionalidad: String,
    profesion: String
})

module.exports = model('profesionales', profesionalesSchema, 'profesionales')