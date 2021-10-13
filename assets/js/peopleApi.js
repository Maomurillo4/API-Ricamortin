const API = "https://jsonplaceholder.typicode.com/users"
const btnSearch = document.getElementById("btnSearch")
const getData = (api) => {
    //retorna el resultado de la API ya que el fetch se encarga de consumir la API osea (api) que tiene la URL
    return fetch(api)
    .then((response)=> response.json())
    .then((json)=>{//guarda esos json en esta palabrita (json)<--hay 5 mil fotos
        fillData(json);//se envian esas 5 mil fotos a la funcion fill data para dibujarlos en el html
    })
    .catch((error)=> {
        console.log("Error in the API", error); //en caso tal de que haya un error
    });
}

const fillData = (json) => {

    let html = "";
    json.forEach(pp =>{
        html+= '<div class="col">';
        html+= '<div class="card h-100">';
        html+= '<div class="card-body">';
        html+= `<h5 class="card-title">${pp.name}</h5>`;
        html+= `<p class="card-text">${pp.email}</p>`;
        html+= '<div class="card-footer">';
        html+= `<small class="text-muted">${pp.address.suite}</small>`;
        html+= "</div>"
        html+= "</div>"
        html+= "</div>"
        html+= "</div>"
        
    });

    document.getElementById("dataPeople").innerHTML = html

};

btnSearch.onclick = function (){
    getData(API)

};