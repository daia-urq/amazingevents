let contenedorCard = document.getElementById("contenedor")
let cardHtml = "";

mostrarEventos(data.events)
contenedorCard.innerHTML = cardHtml;

function mostrarEventos(lista){
  for (let aux of lista) {
    
    cardHtml += `
      <div  class="card p-3">
        <img id="imgCard" src="${aux.image}" class="card-img-top" alt="imagen de evento">
        <div class="card-body text-center">
            <h5 class="card-title">${aux.name}</h5>
            <p class="card-text">${aux.category}</p>
            <p class="card-text">${aux.date}</p>
        </div>
        <div class="card-footer d-flex justify-content-between align-items-center ">
            <p class="m-0">$ ${aux.price}</p>          
            <a href="./details.html" class="btn">ver más</a>
        </div>
      </div>
  `
  }
}