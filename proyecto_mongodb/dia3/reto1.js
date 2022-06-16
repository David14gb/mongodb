const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://david:contraseña@cluster0.o2lmmud.mongodb.net/estudiantes',
{useNewUrlParser: false, useUnifiedTopology: false})

const ProfesoresSchema = new mongoose.Schema({
    teacher_first_name: String, 
    teacher_last_name: String
})

const NotasSchema = new mongoose.Schema({
    date: Date,
    mark: Number,
    student_first_name: String,
    student_last_name: String,
    group_name: String,
    subject_name: String,
    teachers: [ProfesoresSchema]
})

let notasModel = mongoose.model("Notas", NotasSchema);

// let nota1 = new notasModel({
//     date: "2022-06-07",
//     mark: 10,
//     student_first_name: "David",
//     student_last_name: "García",
//     group_name: "Grupo1",
//     subject_name: "Javascript",
//     teachers:[{teacher_first_name:"Menchu",
//                teacher_last_name:"Carmen"
//     }]
// })

// nota1.save()
// .then((result) =>
// {
//     console.log("nota1 Guardada");
// })
// .catch((error) =>
// {
//     console.log(error);
// })

// let nota2 = new notasModel({
//     date: "2022-06-07",
//     mark: 9,
//     student_first_name: "Lidia",
//     student_last_name: "Cotobal",
//     group_name: "Grupo1",
//     subject_name: "Javascript",
//     teachers:[{teacher_first_name:"Menchu",
//                teacher_last_name:"Carmen"
//     }]
// })

// nota2.save()
// .then((result) =>
// {
//     console.log("nota2 Guardada");
// })
// .catch((error) =>
// {
//     console.log(error);
// })

// let nota3 = new notasModel({
//     date: "2021-06-07",
//     mark: 5,
//     student_first_name: "Andres",
//     student_last_name: "Cedeño",
//     group_name: "Grupo2",
//     subject_name: "Html",
//     teachers:[{teacher_first_name:"Menchu",
//                teacher_last_name:"Carmen"
//     }]
// })

// nota3.save()
// .then((result) =>
// {
//     console.log("nota3 Guardada");
// })
// .catch((error) =>
// {
//     console.log(error);
// })

// let nota4 = new notasModel({
//     date: "2021-06-07",
//     mark: 6,
//     student_first_name: "Claudia",
//     student_last_name: "Pelorroja",
//     group_name: "Grupo2",
//     subject_name: "CSS",
//     teachers:[{teacher_first_name:"José",
//                teacher_last_name:"Herrera"
//     }]
// })

// nota4.save()
// .then((result) =>
// {
//     console.log("nota4 Guardada");
// })
// .catch((error) =>
// {
//     console.log(error);
// })

// let nota5 = new notasModel({
//     date: "2021-06-07",
//     mark: 9.5,
//     student_first_name: "David",
//     student_last_name: "García",
//     group_name: "Grupo1",
//     subject_name: "CSS",
//     teachers:[{teacher_first_name:"José",
//                teacher_last_name:"Herrera"
//     }]
// })

// nota5.save()
// .then((result) =>
// {
//     console.log("nota5 Guardada");
// })
// .catch((error) =>
// {
//     console.log(error);
// })

// let nota6 = new notasModel({
//     date: "2021-06-07",
//     mark: 8,
//     student_first_name: "Lidia",
//     student_last_name: "Cotobal",
//     group_name: "Grupo1",
//     subject_name: "CSS",
//     teachers:[{teacher_first_name:"José",
//                teacher_last_name:"Herrera"
//     }]
// })

// nota6.save()
// .then((result) =>
// {
//     console.log("nota6 Guardada");
// })
// .catch((error) =>
// {
//     console.log(error);
// })

// let nota7 = new notasModel({
//     date: "2022-06-07",
//     mark: 8,
//     student_first_name: "Roberto",
//     student_last_name: "Kirise",
//     group_name: "Grupo3",
//     subject_name: "MongoDB",
//     teachers:[{teacher_first_name:"Menchu",
//                teacher_last_name:"Carmen"
//     }]
// })

// nota7.save()
// .then((result) =>
// {
//     console.log("nota7 Guardada");
// })
// .catch((error) =>
// {
//     console.log(error);
// })

// let nota8 = new notasModel({
//     date: "2022-06-07",
//     mark: 5,
//     student_first_name: "Joshua",
//     student_last_name: "Aaaaa",
//     group_name: "Grupo3",
//     subject_name: "MongoDB",
//     teachers:[{teacher_first_name:"Menchu",
//                teacher_last_name:"Carmen"
//     }]
// })

// nota8.save()
// .then((result) =>
// {
//     console.log("nota8 Guardada");
// })
// .catch((error) =>
// {
//     console.log(error);
// })

// let nota9 = new notasModel({
//     date: "2022-06-07",
//     mark: 5,
//     student_first_name: "Karen",
//     student_last_name: "Virginia",
//     group_name: "Grupo4",
//     subject_name: "Javascript",
//     teachers:[{teacher_first_name:"Menchu",
//                teacher_last_name:"Carmen"
//     }]
// })

// nota9.save()
// .then((result) =>
// {
//     console.log("nota9 Guardada");
// })
// .catch((error) =>
// {
//     console.log(error);
// })

// let nota10 = new notasModel({
//     date: "2022-06-07",
//     mark: 5,
//     student_first_name: "Javier",
//     student_last_name: "Garrido",
//     group_name: "Grupo4",
//     subject_name: "Javascript",
//     teachers:[{teacher_first_name:"Menchu",
//                teacher_last_name:"Carmen"
//     }]
// })

// nota10.save()
// .then((result) =>
// {
//     console.log("nota10 Guardada");
// })
// .catch((error) =>
// {
//     console.log(error);
// })

// Calcular la nota media de los alumnos de una asignatura concreta.

// notasModel.aggregate([{$match: {subject_name: "Javascript"}},
//                       {$group: {"_id":"$subject_name", "Nota Media": {"$avg":"$mark"}}}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })


// Calcular el número total de alumnos que hay en el bootcamp incluyendo repetidos.

// notasModel.aggregate([{$count: "Numero de alumnos"}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

// notasModel.distinct("student_first_name")
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

// Listar el nombre y los apellidos de todos los alumnos incluyendo repetidos.

// notasModel.aggregate([{$project: {"Nombre": "$student_first_name",
//                                   "Apellido": "$student_last_name",
//                                     _id:0}
//                     }])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

// Listar el nombre y los apellidos de todos los profesores incluyendo repetidos.

// notasModel.aggregate([{$unwind: "$teachers"}, {$project: {"teachers.teacher_first_name": 1,
//                                                              "teachers.teacher_last_name":1,
//                                                               _id:0}}
//                     ])

// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

// Mostrar el número total de alumnos por grupo ordenados por grupo en orden inverso al alfabeto.

// notasModel.aggregate([{$group: {"_id": "$group_name",
//                                 "Cantidad": {"$sum": 1}}}, 
//                         {$sort: {_id: -1}}
//                     ])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

// Obtén el top 5 de los nombres de las asignaturas cuya nota media sea mayor que 5.

// notasModel.aggregate([{$group: {"_id":"$subject_name", "Nota Media": {"$avg":"$mark"}}},
//                     {$match: {"Nota Media":{"$gt":5}}},
//                     {$sort: {"Nota Media": -1}},
//                     {$limit: 5} ])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

// Calcular el numero de profesores que hay por cada asignatura incluyendo repetidos.

// notasModel.aggregate([{$unwind: "$teachers"},
//                         {$group: {"_id": "$subject_name", "Profesores": {"$sum": 1}}},
                                        
//                        ])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

// Reto2

// Obtén el nombre, apellido y la nota de los alumnos que tengan una nota mayor de 8 o la nota
// tenga fecha del año pasado o anterior.

// notasModel.aggregate([{$match: {"$or": [{mark : {"$gt":8}}, 
//                             {date: {"$lt": new Date("2022,01,01")}}]}},
//                         {$project: {"student_first_name": 1,
//                                   "student_last_name": 1,
//                                   "mark":1,
//                                   "_id":0
//                                 }}     
//                        ])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })


// Obtén la media de las notas que se han dado en el último año por asignatura.

// notasModel.aggregate([{$match: {date: {"$gte": new Date("2022,01,01")}}},
//                         {$group: {"_id": "$subject_name", "Nota Media": {"$avg":"$mark"}}}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

// Obtén la media aritmética de las notas que se han dado en el último año por nombre de alumno.

// notasModel.aggregate([{$match: {date: {"$gte": new Date("2022,01,01")}}},
//                         {$group: {"_id": "$student_first_name", "Nota Media": {"$avg":"$mark"}}}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

// Obtén los nombres de los alumnos y la cantidad total de asignaturas por alumno cuyo profesor
// sea uno que elijáis.
// notasModel.aggregate([{$unwind: "$teachers"}, 
//                         {$match: {"teachers.teacher_first_name": "José", "teachers.teacher_last_name": "Herrera"}},
//                         {$group: {"_id": {"Nombre Alumno": "$student_first_name"},
//                         "Asignatura": {"$sum":1}}}
//                     ])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })