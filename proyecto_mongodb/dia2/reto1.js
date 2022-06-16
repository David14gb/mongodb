const mongoose = require("mongoose");
let Photos = require("./photos");

mongoose.connect('mongodb+srv://david:contraseña@cluster0.o2lmmud.mongodb.net/test',
{useNewUrlParser: false, useUnifiedTopology: false})

let photo1 = new Photos({
    name: "foto name 3", 
    url: "https://areajugones.sport.es/wp-content/uploads/2017/04/%CE%B1%CF%81%CF%87%CE%B5%CE%AF%CE%BF-%CE%BB%CE%AE%CF%88%CE%B7%CF%82.jpg",
    titulo: "Wonder Womana",
    descripcion: "Foto de Wonder Womana"
})
// photo1.save(checkRespuesta)

// Subida de foto

function guardar(name, url, titulo, descripcion){
    
    let photoSubida = new Photos ({
        name: name,
        url: url,
        titulo: titulo,
        descripcion: descripcion
    })
    photoSubida.save(checkRespuesta)
}

let nombre = "Foto nueva";
let urlNueva = "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg";
let tituloNueva = "Foto de África";
let descripcionNueva = "Es una foto de África";

// guardar(nombre, urlNueva, tituloNueva, descripcionNueva)

// Obtener las fotos dado un usuario

// Photos.find({name:"foto name 3"}, 
//             function(err, photoss)
//             {
//                 if(err)
//                     console.log("Error");
//                 else
//                 {
//                     // En este caso al ser una, se puede hacer sin bucle y hacerlo de esta forma
//                     // console.log(photoss)
//                     // console.log(photoss[0].url)
//                     for(let i = 0; i< photoss.length; i++){
                        
//                         console.log(photoss[i].url)

//                     }
//                     console.log(photoss)
                    
//                 }
//             })

// Modificar la descripcion, dado el título de una foto y la descripcion

// Photos.updateOne({name:"foto name 3", descripcion: "Foto de Wonder Woman"}, {descripcion:"Es una foto de Wonder Woman"}, checkRespuesta)

// Dado un usuario y un título, eliminar su foto

// Photos.findOneAndDelete({name:"foto name 3", titulo:"Wonder Woman"}, checkRespuesta);

// Dado un usuario eliminar todas sus fotos

// Photos.deleteMany({name:"foto name 3"})
//     .then(function(items)
//     {
//         console.log("Correderamente Borrado")
//         console.log(items);
//     })
//     .catch(function()
//     {
//         console.log("Error");
//     })



function checkRespuesta(err, res){

    if(err)
        console.log("Error: " + err);
    else{
        console.log("Documento guardado correctamente")
        console.log(res);
    }
}