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

// const { createApp } = Vue

// const app = createApp({
//   data() {
//     return {
//       urlApi: 'https://mindhub-xj03.onrender.com/api/amazing',
//       dataApi: [],
//       eventos: [],
//       backUpEventos: [],
//       categorias: [],
//       texto: '',
//       checkSeleccionados: []
//     }
//   },
//   created() {
//     this.obtenerDatos();
//   },
//   mounted() {

//   },
//   methods: {
//     obtenerDatos() {
//       fetch(this.urlApi)
//         .then(response => response.json())
//         .then(datosApi => {
//           this.dataApi = datosApi,
//             this.eventos = this.dataApi.events,
//             this.backUpEventos = this.dataApi.events,
//             this.nombreCategorias(datosApi.events)
//         })
//     },
//     nombreCategorias(array) {
//       array.forEach(evento => {
//         if (!this.categorias.includes(evento.category)) {
//           this.categorias.push(evento.category)
//         }
//       })
//     }
//   },
//   //escucha  los cambios solo
//   computed: {
//     filtroCombinado() {
//       let = filtradoTexto = this.backUpEventos
//         .filter(evento => evento.name.toLowerCase()
//           .includes(this.texto.toLowerCase()))

//       if (!this.checkSeleccionados.length) {
//         this.eventos = filtradoTexto
//       } else {
//         this.eventos = filtradoTexto
//           .filter(evento => this.checkSeleccionados.includes(
//             evento.category));
//       }
//     },
//     // filtrarPorNombre() {
//     //   this.eventos = this.backUpEventos
//     //     .filter(evento => evento.name.toLowerCase()
//     //       .includes(this.texto.toLowerCase()));
//     // },
//     // filtrarPorCategoria() {
//     //   if (!this.checkSeleccionados.length) {
//     //     this.eventos = this.backUpEventos;
//     //   } else {
//     //     this.eventos = this.backUpEventos
//     //       .filter(evento => this.checkSeleccionados.includes(
//     //         evento.category));
//     //   }
//     // }

//   }
// }).mount('#app')