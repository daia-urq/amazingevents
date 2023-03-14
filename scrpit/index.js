let contenedorCard = document.getElementById('contenedor');
let categoriasInput = document.getElementById('categoria');
let busqueda = document.getElementById('search');


busqueda.addEventListener('input', ()=>{
  superFiltro(data.events, busqueda.value);
});
categoriasInput.addEventListener('change', ()=>{
  superFiltro(data.events);
});

mostrarEventos(data.events);
mostrarCheck(listaDeCategoria(data.events));


