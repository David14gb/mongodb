async function getProfes(){
    let id = document.getElementById("id").value;
    let url;
    if(id != null){
        url = `http://localhost:3000/profesionales?id=${id}`
    }else{
        url = `http://localhost:3000/profesionales`
    }
    param = {
                headers:{
                    "content-type": "application/json; charset=UTF-8"
                },
                method: "GET"
    }
    try{
        let data = await fetch(url, param)
        let result = await data.json();
        console.log(result);

        if(result.length > 0){
            imp= "";
            for(let i = 0; i<result.length; i++){
                imp += ` <div class="card mt-5" style="width: 18rem;">
                <div class="card-body">
                        <h5 class="card-title">Nombre: ${result[i].name}</h5>
                        <p class="card-text">Edad: ${result[i].edad}</p>
                        <p class="card-text">Género: ${result[i].genero}</p>
                        <p class="card-text">Nacionalidad: ${result[i].nacionalidad}</p>
                        <p class="card-text">Profesión: ${result[i].profesion}</p>
                        <p class="card-text">ID: ${result[i]._id}</p>
                    </div>
                </div>
                <div class="col-1"></div>`
                
            }
            document.getElementById("todos").innerHTML = imp;
        }else{
            imp = ` <div class="card mt-5" style="width: 18rem;">
                        <h5 class="card-title">Nombre: ${result.name}</h5>
                        <p class="card-text">Edad: ${result.edad}</p>
                        <p class="card-text">Género: ${result.genero}</p>
                        <p class="card-text">Nacionalidad: ${result.nacionalidad}</p>
                        <p class="card-text">Profesión: ${result.profesion}</p>
                        <p class="card-text">ID: ${result._id}</p>
                    </div>
                    </div>
                    <div class="col-1"></div>`
            document.getElementById("todos").innerHTML = imp
        }
    }catch(e){           
        console.log(e);
    }
}

async function postProfes(){

    // Clase profe
    class Profe{
    constructor(name, edad, genero, nacionalidad, profesion){
            this.name = name
            this.edad = edad
            this.genero = genero
            this.nacionalidad = nacionalidad
            this.profesion = profesion
        }
    }

    // Post
    try{

    let user = new Profe(document.getElementById("name").value, 
                         document.getElementById("edad").value, 
                         document.getElementById("genero").value, 
                         document.getElementById("nacionalidad").value, 
                         document.getElementById("profesion").value) 
                                // ,document.getElementById("id").value)

    let url = `http://localhost:3000/profesionales`;
    let param = {
        headers:{"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(user),
        method: "POST"
    }
    let data = await fetch(url, param);
    let result = await data.json();

    console.log(result);

    }catch(error){
        console.log(error);
    }
}

async function putProfes(){
    let id = document.getElementById("id").value;
    let nombre = document.getElementById("name").value;
    let edad = document.getElementById("edad").value; 
    let genero = document.getElementById("genero").value; 
    let nacionalidad = document.getElementById("nacionalidad").value; 
    let profesion = document.getElementById("profesion").value; 
    let json = { "name" : nombre ? nombre:null,
                "edad" : edad ? edad:null,
                "genero" : genero ? genero:null,
                "nacionalidad" : nacionalidad ? nacionalidad:null,
                "profesion" : profesion ? profesion:null,
                "id" : id}
    let body = {}  
    
    
    for(prop in json){
        
        if(json[prop] != null){
           body[prop] = json[prop]
        }
    }
                
    // Url para cambiar
    let url = `http://localhost:3000/profesionales`;
    let param = {
        headers:{"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(body),
        method: "PUT"
    }
    let data = await fetch(url, param);
    console.log(data);
    let result = await data.json();
    console.log(result);

}
async function deleteProfes(){
    let id = document.getElementById("id").value;
    try{
        let url = `http://localhost:3000/profesionales?id=${id}`;
        let json ={ 
                    "id" : id}
        let param = {
            headers:{"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify(json), 
            method: "DELETE"
        }
    
        let data = await fetch(url, param);
        let result = await data.json();
        console.log(result);
        if(result.resultado.length > id){
            result.resultado.splice(id, 1);
            console.log(result);
        }
    }catch(error){

        // showToast("ERROR: Fallo en la comunicación con el API REST")
        console.log(error);  
    }
    
}


// function showToast(message){
//     document.getElementById("toastText").innerText=message;
//     let toastElement  = document.getElementById('toast')

//     toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " "  + color;

//     let toast = new bootstrap.Toast(toastElement)
//     toast.show()
// }