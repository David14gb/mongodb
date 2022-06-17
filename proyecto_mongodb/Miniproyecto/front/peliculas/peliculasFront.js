async function getMovie(){
    let id = document.getElementById("id").value;
    let url;
    if(id != null){
        url = `http://localhost:3000/peliculas?id=${id}`
    }else{
        url = `http://localhost:3000/peliculas`
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
                        <h5 class="card-title">Título: ${result[i].title}</h5>
                        <p class="card-text">Año: ${result[i].year}</p>
                        <p class="card-text">Idioma: ${result[i].language}</p>
                        <p class="card-text">ID: ${result[i]._id}</p>
                    </div>
                </div>
                <div class="col-1"></div>`
                
            }
            document.getElementById("todos").innerHTML = imp;
        }else{
            imp = ` <div class="card mt-5" style="width: 18rem;">
                    <h5 class="card-title">Título: ${result.title}</h5>
                    <p class="card-text">Año: ${result.year}</p>
                    <p class="card-text">Idioma: ${result.language}</p>
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

async function postMovie(){

    // Clase peli
    class Peli{
    constructor(title, year, language){
            this.title = title
            this.year = year
            this.language = language
        }
    }

    // Post
    try{

    let user = new Peli(document.getElementById("title").value, 
                         document.getElementById("year").value, 
                         document.getElementById("language").value) 
                                // ,document.getElementById("id").value)

    let url = `http://localhost:3000/peliculas`;

        if(validar(user)){
            let param = {
                headers:{"Content-type": "application/json; charset=UTF-8"},
                body: JSON.stringify(user),
                method: "POST"
            }
            let data = await fetch(url, param);
            let result = await data.json();

            console.log(result);

            if(result.err){
                showToast("ERROR: " + result.err, "bg-danger");
            }
            else{
                showToast("Usuario Creado Correctamente", "bg-success");
            }
        }
    }catch(error){
        console.log(error);
    }
}

async function putMovie(){
    let id = document.getElementById("id").value;
    let title = document.getElementById("title").value;
    let year = document.getElementById("year").value; 
    let language = document.getElementById("language").value; 
    let json = { "title" : title ? title:null,
                "year" : year ? year:null,
                "language" : language ? language:null,
                "id" : id}
    let body = {}  
    
    
    for(prop in json){
        
        if(json[prop] != null){
           body[prop] = json[prop]
        }
    }
   
    console.log(body);
    // Url para cambiar
    let url = `http://localhost:3000/peliculas`;
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
async function deleteMovie(){
    let id = document.getElementById("id").value;
    try{
        let url = `http://localhost:3000/peliculas?id=${id}`;
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


function validar (user){

    let resultado = false;

    if(user.title == '' + user.title == "null" ){
        showToast("AVISO: Campo nombre no informado", "bg-warning");
    }
    else if( user.year == '' +  user.year == "null"){
        showToast("AVISO: Campo apellido no informado", "bg-warning");
    }
    else{
        resultado = true;
    }

    return resultado;
    document.getElementById("toastText").innerText=message;
    let toastElement  = document.getElementById('toast')

    toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " "  + color;

    let toast = new bootstrap.Toast(toastElement)
    toast.show()
}
// {
//     document.getElementById("toastText").innerText=message;
//     let toastElement  = document.getElementById('toast')

//     toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " "  + color;

//     let toast = new bootstrap.Toast(toastElement)
//     toast.show()
// }
