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
    
        PeliculasModel.findById(request.query.id)
        .then((pelis) => {
            console.log(pelis.actors);
            response.send(pelis.actors);
        })
        .catch((err) => {
            console.log(err);
        })
    
}

function getDirector(request, response){
    
    PeliculasModel.findById(request.query.id)
    .then((pelis) => {
        console.log(pelis.director);
        response.send(pelis.director);
    })
    .catch((err) => {
        console.log(err);
    })

}

function getGuionista(request, response){
    
    PeliculasModel.findById(request.query.id)
    .then((pelis) => {
        console.log(pelis.guionista);
        response.send(pelis.guionista);
    })
    .catch((err) => {
        console.log(err);
    })

}
function getProductora(request, response){
    
    PeliculasModel.findById(request.query.id)
    .then((pelis) => {
        console.log(pelis.productora);
        response.send(pelis.productora);
    })
    .catch((err) => {
        console.log(err);
    })

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

function postDirector(request, response){
    console.log(request.body);

   
    let  director = request.body.director;
    let id = request.body.id

    PeliculasModel.findByIdAndUpdate(id, {$push: {director : director}}) 

    
    .then((peli) =>
    {
        console.log("Director añadido correctamente");
        console.log(peli);
        response.send(peli);
    })
    .catch((error) =>
    {
        console.log(error);
    })
}

function postGuionista(request, response){
    console.log(request.body);

   
    let  guionista = request.body.guionista;
    let id = request.body.id

    PeliculasModel.findByIdAndUpdate(id, {$push: {guionista : guionista}}) 

    
    .then((peli) =>
    {
        console.log("Guionista añadido correctamente");
        console.log(peli);
        response.send(peli);
    })
    .catch((error) =>
    {
        console.log(error);
    })
}

function deleteActor(request, response){

    console.log(request.body);

    let id = request.body.id;

    PeliculasModel.findByIdAndUpdate(id, {$pop: {actors: 1} })
    .then((peli) => {
        console.log("Actor eliminado correctamente");
        console.log(peli);
        response.send(peli);
    })
    .catch( (error) => {
        console.log(error);
    })

}

function deleteDirector(request, response){

    console.log(request.body);

    let id = request.body.id;

    PeliculasModel.findByIdAndUpdate(id, {$pop: {director: 1} })
    .then((peli) => {
        console.log("Director eliminado correctamente");
        console.log(peli);
        response.send(peli);
    })
    .catch( (error) => {
        console.log(error);
    })

}

function deleteGuionista(request, response){

    console.log(request.body);

    let id = request.body.id;

    PeliculasModel.findByIdAndUpdate(id, {$pop: {guionista: 1} })
    .then((peli) => {
        console.log("Guionista eliminado correctamente");
        console.log(peli);
        response.send(peli);
    })
    .catch( (error) => {
        console.log(error);
    })

}

// title: String, 
// year: Number,
// language: String

module.exports = {getStart, getMovie, postMovie, putMovie, deleteMovie, 
                  getActor,getDirector, getGuionista, getProductora, 
                  postActor, postDirector, postGuionista,
                  deleteActor, deleteDirector, deleteGuionista}