const PeliculasModel = require("../model/peliculas");
const ProfeModel = require("../model/profesionales");


function getStart(request, response){

    let respuesta = {error: true, codigo:200, mensaje: 'Punto de inicio'}; 
    response.send(respuesta);
    // next();
}

function getProfes(request, response){
    if(request.query.id){

        ProfeModel.findById(request.query.id )
        .then((profe) => {
            console.log(profe);
            response.send(profe);
        })
        .catch((err) => {
            console.log(err);
        })
    }else{

        ProfeModel.find({})
        .then((profe) => {
            console.log(profe);
            response.send(profe);
        })
        .catch((err) => {
            console.log(err);
        })

    }

}


function postProfes(request, response){

    console.log(request.body);

    let profeNuevo = new ProfeModel({
        name: request.body.name,
        edad: request.body.edad,
        genero: request.body.genero,
        nacionalidad: request.body.nacionalidad,
        profesion: request.body.profesion
    })
    profeNuevo.save()
    .then((profe) =>
    {
        console.log("Usuario guardado correctamente");
        console.log(profe);
        response.send(profe);
    })
    .catch((error) =>
    {
        console.log(error);
    })
}

function putProfes(request, response){

    let name = request.body.name;
    let edad = request.body.edad;
    let genero = request.body.genero;
    let nacionalidad = request.body.nacionalidad;
    let profesion = request.body.profesion;
    let id = request.body.id

    ProfeModel.findByIdAndUpdate(id, 
                        {name: name,
                         edad: edad,
                         genero: genero,
                         nacionalidad: nacionalidad,
                         profesion: profesion}) 
    .then(function(profe)
    {
        console.log("Correderamente Actualizado")
        console.log(profe);
        response.send(profe)
    })
    .catch(function()
    {
        console.log("Error");
    })
    
}

function deleteProfes(request, response){

    ProfeModel.findByIdAndDelete(request.body.id)
        .then(function(profe)
        {
            console.log("Correderamente Borrado")
            console.log(profe);
            response.send(profe)
        })
        .catch(function()
        {
            console.log("Error");
        })
    
}

// profesional
// name: String, 
// edad: Number,
// genero: String,
// nacionalidad: String,
// profesion: String

// pelicula
// title: String, 
// year: Number,
// language: String,
// actors: [String],
// director: [String],
// guionista: [String]

module.exports = {getStart, getProfes, postProfes, putProfes, deleteProfes}

// , getPhotos, putPhotos, deletePhotos
