let contenedorCard = document.getElementById("contenedor");
let categoriasInput = document.getElementById("categoria");
let busqueda = document.getElementById('search');
let urlApi = 'https://mindhub-xj03.onrender.com/api/amazing';

obtenerrDatos();


async function obtenerrDatos() {
  try {
    const response = await fetch(urlApi)

    const data = await response.json();

    let listaPasada = filtrarEventosPasados(data);
   
    console.log(listaPasada);
    mostrarEventos(listaPasada);
    mostrarCheck(listaDeCategoria(listaPasada));


    busqueda.addEventListener('input', () => {     
      superFiltro(listaPasada, busqueda.value);
    });

    categoriasInput.addEventListener('change', () => {
      superFiltro(listaPasada, "");
    });

  } catch (error) {
    console.log(error);

  }
}

