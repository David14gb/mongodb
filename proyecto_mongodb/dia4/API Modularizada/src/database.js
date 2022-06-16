const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://david:contraseña@cluster0.o2lmmud.mongodb.net/test',
{useNewUrlParser: true, useUnifiedTopology: true})
.then((db) => {
    console.log("database connected on " + db.connection.host)
})
.catch((error) => {
    console.log(error);
})