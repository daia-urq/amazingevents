function superFiltro(lista){
    let primerFiltro = filtrarPorNombre(lista,busqueda.value)
    let segundoFiltro = filtrarPorCategoria(primerFiltro)
    mostrarEventos(segundoFiltro)
  };
  
  function mostrarEventos(lista) {
    if(lista.length == 0){
      contenedorCard.innerHTML = "<h6>There are no results for this search</h6>"
      return
    }
  
    let cardHtml = "";
    lista.forEach(aux => {
      cardHtml += `
        <div  class="card cardss p-3">
          <img id="imgCard" src="${aux.image}" class="card-img-top" alt="imagen de evento">
          <div class="card-body text-center">
              <h5 class="card-title">${aux.name}</h5>
              <p class="card-text">${aux.category}</p>
              <p class="card-text">${aux.date}</p>
          </div>
          <div class="card-footer d-flex justify-content-between align-items-center ">
              <p class="m-0">$ ${aux.price}</p>          
              <a href="./details.html?id=${aux._id}" class="btn">ver más</a>
          </div>
        </div>
    `
    });
    contenedorCard.innerHTML = cardHtml;
  };
  
  function mostrarCheck(lista) {
    let check = "";
    lista.forEach(aux => {
      check += `
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="${aux}" value="${aux}">
            <label class="form-check-label" for="${aux}">${aux}</label>
          </div>          `
    });
    categoriasInput.innerHTML = check;
  };
  
  function listaDeCategoria(lista) {
    let categorias = [];
    lista.forEach(aux => {
      categorias.push(aux.category.toLowerCase());
  
    });
    categorias = Array.from(new Set(categorias));
    categorias.sort();
    return categorias;
  };
  
  function filtrarPorNombre(lista, nombre) {
    let listaFiltrada = lista.filter(aux => aux.name.toLowerCase().includes(nombre.toLowerCase()));
    return listaFiltrada;
  }
  
  function filtrarPorCategoria(lista) {
    let checkBox = document.querySelectorAll("input[type='checkbox']"); 
    let checkBoxLista = Array.from(checkBox); 
    let checkSelecionados = checkBoxLista.filter(check => check.checked);
    if (checkSelecionados.length == 0) {
      return lista;
    }
  
    let categorias = checkSelecionados.map(check => check.value.toLowerCase());
    console.log(categorias);
  
    let listafiltrada = lista.filter(aux => categorias.includes(aux.category.toLowerCase()));
  
    return listafiltrada;
  };