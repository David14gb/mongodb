let mongoose = require("mongoose");
let User = require("./mongo");
let Profile = require('./profile');
let Creedentials = require ("./mongo");
let General = require ('./general');

mongoose.connect('mongodb+srv://david:contraseña@cluster0.o2lmmud.mongodb.net/test',
{useNewUrlParser: false, useUnifiedTopology: false})

let userDocument = new User({
    login: "david",
    password: "contraseña" 
})
// userDocument.save(checkRespuesta)
// console.log(userDocument.login)

let profilesDocument = new Profile({
    name: "david",
    surname: "garcía",
    dateOfBirth: 1995,
    comments:"Hola", 
    rol: "usuario"
})
// profilesDocument.save(checkRespuesta)

let profDocument = new Profile({
    name: "Menx",
    surname: "garcía",
    dateOfBirth: 1989,
    comments:"Hola", 
    rol: "usuario"
})
// profDocument.save(checkRespuesta);


let perfil = new Profile({
    name: "pepeee", 
    surname: "pepapig", 
    dateOfBirth: 2000,
    comments: "hola a todos",
    rol: "ussssssssser"
})
// perfil.save(checkRespuesta)


let creedentialsDocument = new Creedentials({
    addres: "calle la pantomina",
    phone: 123987456,
    email: "david@gmail.com"
})
// creedentialsDocument.save(checkRespuesta)

let generalDocument = new General({
    name: "David",
    surname: "García",
    dateOfBirth: 1995,
    comments: "General de todo",
    rol: "Usuario General",
    login: "david",
    password: "contraseña",
    addres: "mi casa",
    phone: 678934568,
    email: "david@gmail.com"
})

// generalDocument.save(checkRespuesta)

let segundoGDocument = new General({
    name: "Lidia",
    surname: "Cotobal",
    dateOfBirth: 2001,
    comments: "General de todo",
    rol: "Usuario General",
    login: "Lidia",
    password: "contraseña",
    addres: "mi casa",
    phone: 678934568,
    email: "Lidia@gmail.com"
})

// segundoGDocument.save(checkRespuesta)

let pruebaDocument = new General({
    name: "Pepa",
    surname: "pig",
    dateOfBirth: 2005,
    comments: "General de todo",
    rol: "Usuario General",
    login: "Pepa",
    password: "contraseña",
    addres: "mi casa",
    phone: "678934568",
    email: "pepapig@gmail.com"
})

pruebaDocument.save(checkRespuesta)


function checkRespuesta(err, res){

    if(err)
        console.log("Error: " + err);
    else{
        console.log("Documento guardado correctamente")
        console.log(res);
    }
}