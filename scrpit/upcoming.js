let contenedorCard = document.getElementById("contenedor");
let categoriasInput = document.getElementById("categoria");
let busqueda = document.getElementById('search');

let listaFutura = filtrarEventosFuturos(data);

busqueda.addEventListener('input', ()=>{
  superFiltro(listaFutura, busqueda.value);
});

categoriasInput.addEventListener('change', ()=>{
  superFiltro(listaFutura);
});

mostrarEventos(listaFutura);
mostrarCheck(listaDeCategoria(data.events));

function filtrarEventosFuturos(lista){
  let eventosFuturos = lista.events.filter((evento) => evento.date >= lista.currentDate)
  return eventosFuturos;
}