const mongoose = require("mongoose");
const photos = require("./photos");

mongoose.connect('mongodb+srv://david:contraseña@cluster0.o2lmmud.mongodb.net/estudiantes',
{useNewUrlParser: false, useUnifiedTopology: false})

const TeachersSchema = new mongoose.Schema({
    firstName: String, 
    lastName: String
})

const SubjectsSchema = new mongoose.Schema({
    title: String, 
    teachers: [TeachersSchema]
})


TeachersSchema.add({subjects: [SubjectsSchema]});

const MarksSchema = new mongoose.Schema({
    date: Date,
    mark: Number, 
    subjects: SubjectsSchema
})

const StudentsSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    marks: [MarksSchema]
})

MarksSchema.add({students: [StudentsSchema]});

let tearchersModel = mongoose.model("Teacher", TeachersSchema);
let subjectsModel = mongoose.model("Subjects", SubjectsSchema);
let markModel = mongoose.model("Marks", MarksSchema);
let studentsModel = mongoose.model("Students", StudentsSchema);

// let teacher1 = new tearchersModel({firstName: "Menchu", lastName:"Carmen", subjects: [subjects1, subjects4]});
let teacher1 = new tearchersModel({firstName: "Menchu", lastName:"Carmen", subjects: []});
// let teacher2 = new tearchersModel({firstName: "Jose", lastName:"Herrera", subjects: [subjects2, subjects3]});
let teacher2 = new tearchersModel({firstName: "Jose", lastName:"Herrera", subjects: []});
let subjects1 = new subjectsModel({title:"Javascript", teachers:[teacher1]});
let subjects2 = new subjectsModel({title:"html", teachers:[teacher2]});
let subjects3 = new subjectsModel({title:"CSS", teachers:[teacher1, teacher2]});
let subjects4 = new subjectsModel({title:"Node.js", teachers:[teacher2]});
let marks1 = new markModel({date: "2022-06-07", mark: 10, subjects: subjects1, student:[]});
let marks2 = new markModel({date: "2022-06-10", mark: 10, subjects: subjects2, student:[]});
let marks3 = new markModel({date: "2022-06-11", mark: 10, subjects: subjects3, student:[]});
let marks4 = new markModel({date: "2022-06-11", mark: 10, subjects: subjects4, student:[]});
let student1 = new studentsModel({firstName:"David", lastName:"García", marks:[marks1, marks2]});
let student2 = new studentsModel({firstName:"Lidia", lastName:"Cotobal", marks:[marks2, marks3]});
let student3 = new studentsModel({firstName:"Andrés", lastName:"Cedeño", marks:[marks3, marks4]});
let student4 = new studentsModel({firstName:"Roberto", lastName:"Kirise", marks:[marks3, marks4]});


let st = new studentsModel({
    firstName:"David",
    lastName:"García",
    marks: [{date: "2022-06-07",
            mark: 10,
            subjects: {title:"Node.js", 
                        teachers:[{firstName: "Jose", 
                                    lastName:"Herrera"},
                                {firstName: "Menchu", 
                                lastName:"Carmen"}]
                    }
        }, {date: "2022-06-07",
        mark: 10,
        subjects: {title:"Node.js", 
                    teachers:[{firstName: "Jose", 
                                lastName:"Herrera"},
                            {firstName: "Menchu", 
                            lastName:"Carmen"}]
                }
}]
})
// st.save()
// .then((result) =>
// {
//     console.log("st Guardado");
// })
// .catch((error) =>
// {
//     console.log(error);
// })
// let st1 = new studentsModel({
//     firstName:"Lidia",
//     lastName:"Cotobal",
//     marks: [{date: "2022-06-07",
//             mark: 10,
//             subjects: {title:"html.js", 
//                         teachers:[{firstName: "Jose", 
//                                     lastName:"Herrera"},
//                                 {firstName: "Menchu", 
//                                 lastName:"Carmen"}]
//                     }
//         }, {date: "2022-06-07",
//         mark: 10,
//         subjects: {title:"Node.js", 
//                     teachers:[{firstName: "Jose", 
//                                 lastName:"Herrera"},
//                             {firstName: "Menchu", 
//                             lastName:"Carmen"}]
//                 }
// }]
// })
// st1.save()
// .then((result) =>
// {
//     console.log("st1 Guardado");
// })
// .catch((error) =>
// {
//     console.log(error);
// })

// let st2 = new studentsModel({
//     firstName:"Andres",
//     lastName:"Cedeño",
//     marks: [{date: "2022-06-07",
//             mark: 10,
//             subjects: {title:"css.js", 
//                         teachers:[{firstName: "Jose", 
//                                     lastName:"Herrera"},
//                                 {firstName: "Menchu", 
//                                 lastName:"Carmen"}]
//                     }
//         }, {date: "2022-06-07",
//         mark: 10,
//         subjects: {title:"Node.js", 
//                     teachers:[{firstName: "Jose", 
//                                 lastName:"Herrera"},
//                             {firstName: "Menchu", 
//                             lastName:"Carmen"}]
//                 }
// }]
// })

// st2.save()
// .then((result) =>
// {
//     console.log("st2 Guardado");
// })
// .catch((error) =>
// {
//     console.log(error);
// })
// let st3 = new studentsModel({
//     firstName:"Roberto",
//     lastName:"Kirise",
//     marks: [{date: "2022-06-07",
//             mark: 10,
//             subjects: {title:"Javascript.js", 
//                         teachers:[{firstName: "Jose", 
//                                     lastName:"Herrera"},
//                                 {firstName: "Menchu", 
//                                 lastName:"Carmen"}]
//                     }
//         }, {date: "2022-06-07",
//         mark: 10,
//         subjects: {title:"Node.js", 
//                     teachers:[{firstName: "Jose", 
//                                 lastName:"Herrera"},
//                             {firstName: "Menchu", 
//                             lastName:"Carmen"}]
//                 }
// }]
// })
// st3.save()
// .then((result) =>
// {
//     console.log("st3 Guardado");
// })
// .catch((error) =>
// {
//     console.log(error);
// })

// Todas las notas de un alumno.

studentsModel.findOne({firstName:"David"}, 
            function(err, photoss)
            {
                if(err)
                    console.log("Error");
                else
                {
                   for(let i = 0; i< photoss.marks.length; i++){
                    console.log(photoss.marks[i].mark)
                   
                   }
                }
            })

// Todos las asignaturas de un alumno.

studentsModel.findOne({firstName:"David"}, 
            function(err, photoss)
            {
                if(err)
                    console.log("Error");
                else
                {
                   for(let i = 0; i< photoss.marks.length; i++){
                    console.log(photoss.marks[i].subjects.title)
                   
                   }
                }
            })
// Todos los profesores de un alumno.
studentsModel.findOne({firstName:"David"}, 
            function(err, photoss)
            {
                if(err)
                    console.log("Error");
                else
                {
                   for(let i = 0; i< photoss.marks.length; i++){
                    console.log(photoss.marks[i].subjects.teachers[i].firstName)
                   
                   }
                }
            })