const  mongoose = require('mongoose');

const GeneralSchema = new mongoose.Schema({
    
    name: {
        type:String,
        enum: ["David", "david", "Lidia", "lidia", "Pepa", "Pig"]
    }, 
    surname: String,
    dateOfBirth: {
        type: Number,
        max: 2005,
        min: 1990,
    },
    comments: String,
    rol: String,
    login: String, 
    password: {
        type: String,
        validate: 
        [
            function(password){
                return password.length >=5;
            },
            'El password debería de ser más largo, mínimo 5'], 
            select: false
    },
    addres: String,
    phone: {
        type: String,
        validate: 
        [
            function(phone){
                return phone.length == 9;
            },
            'El password debería de ser de 9 números']
    },
    email: String

})

module.exports = mongoose.model('general', GeneralSchema, 'general')