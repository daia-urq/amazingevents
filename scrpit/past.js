let contenedorCard = document.getElementById("contenedor");
let categoriasInput = document.getElementById("categoria");
let busqueda = document.getElementById('search');


let listaPasada = filtrarEventosPasados(data);

busqueda.addEventListener('input', ()=>{
  superFiltro(listaPasada, busqueda.value);
});

categoriasInput.addEventListener('change', ()=>{
  superFiltro(listaPasada);
});

mostrarEventos(listaPasada);
mostrarCheck(listaDeCategoria(data.events));

function filtrarEventosPasados(lista) {
  let eventosPasados = lista.events.filter((evento) => evento.date < lista.currentDate)
  return eventosPasados;
}