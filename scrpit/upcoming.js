let contenedorCard = document.getElementById("contenedor");
let categoriasInput = document.getElementById("categoria");
let busqueda = document.getElementById('search');
let urlApi = 'https://mindhub-xj03.onrender.com/api/amazing';


obtenerrDatos();


async function obtenerrDatos() {
  try {
    const response = await fetch(urlApi)

    const data = await response.json();

    let listaFutura = filtrarEventosFuturos(data);
   
    mostrarEventos(listaFutura);
    mostrarCheck(listaDeCategoria(listaFutura));

    busqueda.addEventListener('input', () => {     
      superFiltro(listaFutura, busqueda.value);
    });

    categoriasInput.addEventListener('change', () => {
      superFiltro(listaFutura, "");
    });

  } catch (error) {
    console.log(error);

  }
}

