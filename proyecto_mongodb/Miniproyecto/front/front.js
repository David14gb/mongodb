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
                        <h5 class="card-title">Nombre: ${result[i].first_name}</h5>
                        <p class="card-text">Apellido: ${result[i].last_name}</p>
                        <p class="card-text">ID: ${result[i].student_id}</p>
                    </div>
                </div>
                <div class="col-1"></div>`
                
            }
            document.getElementById("todos").innerHTML = imp;
        }else{
            imp = ` <div class="card mt-5" style="width: 18rem;">
                        <div class="card-body">
                        <h5 class="card-title">Nombre: ${result[i].first_name}</h5>
                        <p class="card-text">Apellido: ${result[i].last_name}</p>
                        <p class="card-text">ID: ${result[i].student_id}</p>
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

    // Clase Alumno
    class Alumno{
    constructor(first_name, last_name){
            this.first_name = first_name
            this.last_name = last_name
        }
    }

    // Post
    try{

    let user = new Alumno(document.getElementById("name").value, 
                                document.getElementById("apellido").value) 
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
    let apellido = document.getElementById("apellido").value; 
    let json ={ "first_name" : nombre ? nombre:null,
                "last_name" : apellido ? apellido:null,
                "student_id" : id}
                
    // Url para cambiar
    let url = `http://localhost:3000/profesionales`;
    let param = {
        headers:{"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(json),
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