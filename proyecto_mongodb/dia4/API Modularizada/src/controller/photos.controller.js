const PhotosModel = require("../model/photos");


function getStart(request, response){

    let respuesta = {error: true, codigo:200, mensaje: 'Punto de inicio'}; 
    response.send(respuesta);
    // next();
}

function getPhotos(request, response){
    // if(request.query.id == null){
    //     PhotosModel.find({})
    //     .then((photoss) => 
    //     {
    //         console.log(photoss);
    //         response.send(photoss)
    //     })
    //     .catch((err) => 
    //     {
    //         console.log(err);
    //     })
    // }else{

    //     PhotosModel.findById(request.query.id)
    //     .then((photoss) =>
    //     {

    //         console.log(photoss);
    //         response.send(photoss)

    //     })
    //     .catch((err) =>
    //     {

    //         console.log(err);
    //     })
    // }
    PhotosModel.find({name:request.body.name}, 
            function(err, photoss)
            {
                if(err)
                    console.log("Error");
                else
                {
                    // En este caso al ser una, se puede hacer sin bucle y hacerlo de esta forma
                    // console.log(photoss)
                    // console.log(photoss[0].url)
                    for(let i = 0; i< photoss.length; i++){
                        
                        console.log(photoss[i].url)

                    }
                    console.log(photoss)
                    response.send(photoss)
                    
                }
            })
}

function postPhotos(request, response){

    console.log(request.body);

    let photoNueva = new PhotosModel({
        name: request.body.name,
        url: request.body.url,
        titulo: request.body.titulo,
        descripcion: request.body.descripcion
    })
    photoNueva.save()
    .then((photoss) =>
    {
        console.log("Usuario guardado correctamente");
        console.log(photoss);
        response.send(photoss);
    })
    .catch((error) =>
    {
        console.log(error);
    })
}

function putPhotos(request, response){
    PhotosModel.updateOne({titulo: request.body.titulo}, 
    {descripcion: request.body.descripcion}) 
    .then(function(photoss)
    {
        console.log("Correderamente Actualizado")
        console.log(photoss);
        response.send(photoss)
    })
    .catch(function()
    {
        console.log("Error");
    })
    
}

function deletePhotos(request, response){
    if(request.body.titulo){
    PhotosModel.findOneAndDelete({name: request.body.name, titulo: request.body.titulo})
    .then(function(photoss)
    {
        console.log("Correderamente Borrado")
        console.log(photoss);
        response.send(photoss)
    })
    .catch(function()
    {
        console.log("Error");
    })
    }else{
    PhotosModel.deleteMany({name: request.body.name})
    .then(function(photoss)
    {
        console.log("Correderamente Borrado")
        console.log(photoss);
        response.send(photoss)
    })
    .catch(function()
    {
        console.log("Error");
    })
}
}


// Post
// {
//     "name": "Foto Prueba Postman",
//     "url": "Url inventada en Postman",
//     "titulo": "El título Prueba en Postman",
//     "descripcion": "Esta es la descripción inventada en Postman"
// }

// Put
// {
//     "titulo": "El título Prueba en Postman",
//     "descripcion": "He cambiado la descripción con el put desde Postman"
// }

module.exports = {getStart, getPhotos, postPhotos, putPhotos, deletePhotos}
