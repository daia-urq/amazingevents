const query = location.search;
let parametro = new URLSearchParams(query);
let id = parametro.get("id");

let evento = data.events.find(aux => aux._id == id);

console.log(evento)

let contenedor = document.getElementById("contenedor");

let card = "";

card = `<div id="cardDetail" class="card mb-3">
<div class="row">
    <div class="col-md-8">
        <img id="cardimg" src=${evento.image}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-4 d-flex flex-column justify-content-evenly align-items-start">
        <div class="card-body">
            <h2 class="card-title">${evento.name}</h2>
            <p class="card-text">${evento.description}</p>
        </div>
        <div class="card-body">            
            <h6>Category: ${evento.category}</h6>   
            <h6>Place: ${evento.place}</h6>                                         
            <h6>Capacity: ${evento.capacity}</h6>` 
            if (evento.assistance != undefined) {
              card = card + `<h6>Assistance: ${evento.assistance}</h6> `
            }else{
              card = card + `<h6>Estimate: ${evento.estimate}</h6> `
            }      
            card = card +` 
            <h5 class="">Date: ${evento.date}</h5>
            <h5>$ ${evento.price}</h5>             
        </div>                       
    </div>
</div>

</div>`
;

contenedor.innerHTML = card;