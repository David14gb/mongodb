const PeliculasModel = require("../model/peliculas");

function getStart(request, response){

    let respuesta = {error: true, codigo:200, mensaje: 'Punto de inicio'}; 
    response.send(respuesta);
    // next();
}

function getMovie(request, response){
    if(request.query.id){

        PeliculasModel.findById(request.query.id)
        .then((pelis) => {
            console.log(pelis);
            response.send(pelis);
        })
        .catch((err) => {
            console.log(err);
        })
    }else{

        PeliculasModel.find({})
        .then((pelis) => {
            console.log(pelis);
            response.send(pelis);
        })
        .catch((err) => {
            console.log(err);
        })

    }

}
function postMovie(request, response){

    console.log(request.body);

    let peliNueva = new PeliculasModel({
        title: request.body.title,
        year: request.body.year,
        language: request.body.language,
        actors: request.body.actors,
        director: request.body.director,
        guionista: request.body.guionista,
        productora: request.body.productora
    })
    peliNueva.save()
    .then((peli) =>
    {
        console.log("Peli guardado correctamente");
        console.log(peli);
        response.send(peli);
    })
    .catch((error) =>
    {
        console.log(error);
    })
}

function putMovie(request, response){

    let title = request.body.title;
    let year = request.body.year;
    let language = request.body.language;
    let id = request.body.id

    PeliculasModel.findByIdAndUpdate(id, 
                        {title: title,
                         year: year,
                         language: language}) 
    .then(function(peli)
    {
        console.log("Correderamente Actualizado")
        console.log(peli);
        response.send(peli)
    })
    .catch(function()
    {
        console.log("Error");
    })
    
}

function deleteMovie(request, response){

    PeliculasModel.findByIdAndDelete(request.body.id)
        .then(function(peli)
        {
            console.log("Correderamente Borrado")
            console.log(peli);
            response.send(peli)
        })
        .catch(function()
        {
            console.log("Error");
        })
    
}

// Endpoints

function getActor(request, response){
    // if(request.query.id){

    //     PeliculasModel.findById(request.query.id)
    //     .then((pelis) => {
    //         console.log(pelis);
    //         response.send(pelis);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    // }else{

    //     PeliculasModel.find({})
    //     .then((pelis) => {
    //         console.log(pelis);
    //         response.send(pelis);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })

    // }
}

function postActor(request, response){
    console.log(request.body);

   
    let  actor = request.body.actor;
    let id = request.body.id

    PeliculasModel.findByIdAndUpdate(id, {$push: {actors : actor}}) 

    
    .then((peli) =>
    {
        console.log("Actor añadido correctamente");
        console.log(peli);
        response.send(peli);
    })
    .catch((error) =>
    {
        console.log(error);
    })
}

// title: String, 
// year: Number,
// language: String

module.exports = {getStart, getMovie, postMovie, putMovie, deleteMovie, getActor, postActor}

// getProfes, postProfes, putProfes, deleteProfes