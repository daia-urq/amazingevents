let contenedorCard = document.getElementById('contenedor');
let categoriasInput = document.getElementById('categoria');
let busqueda = document.getElementById('search');
let urlApi = 'https://mindhub-xj03.onrender.com/api/amazing';

obtenerrDatos();


async function obtenerrDatos() {
  try {
    const response = await fetch(urlApi)

    const data = await response.json(); 

    mostrarEventos(data.events);
    mostrarCheck(listaDeCategoria(data.events));

    
    busqueda.addEventListener('input', () => {    
      superFiltro(data.events, busqueda.value);
    });
    
    categoriasInput.addEventListener('change', () => {
      superFiltro(data.events, "");
    });
    

  } catch (error) {
    console.log(error);

  } 

}