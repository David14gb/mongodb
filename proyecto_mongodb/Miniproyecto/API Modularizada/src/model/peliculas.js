const {Schema, model} = require("mongoose");

const peliculasSchema = new Schema({
    title: String, 
    year: Number,
    language: String,
    actors: [String],
    director: [String],
    guionista: [String],
    productora: [String]
})

module.exports = model('peliculas', peliculasSchema, 'peliculas')