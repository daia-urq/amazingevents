let contenedorTabla = document.getElementById('tabla1')
let contenedorTabla3 = document.getElementById('tabla3')
let contenedorTabla2 = document.getElementById('tabla2')
let urlApi = 'https://mindhub-xj03.onrender.com/api/amazing';

obtenerDatos();

async function obtenerDatos() {
    try {
        const response = await fetch(urlApi)
        const data = await response.json();
        let eventosPasados = filtrarEventosPasados(data);
        let eventosFuturos = filtrarEventosFuturos(data);

        let arrayMayorCapacidad = [];

        eventosPasados.forEach(element => {
            arrayMayorCapacidad.push(element);
            return arrayMayorCapacidad;
        });

        ordenarPorCapacidad(arrayMayorCapacidad);
        calculoPorcentajeAsistencia(eventosPasados);

        let mayor = mayorPorcentajeAsistencia(eventosPasados);
        let menor = menorPorcentajeAsistencia(eventosPasados);

        mostrarPrimerTabla(mayor, menor, arrayMayorCapacidad[0]);

        let statsEventosPasados = statsTabla2(eventosPasados);
        
        let starsEventosFuturos = statsTabla2(eventosFuturos );

        mostrarTabla2(statsEventosPasados,"Past", contenedorTabla3);
        mostrarTabla2(starsEventosFuturos, "Upcoming", contenedorTabla2);

    } catch (error) {
        console.log(error);
    }
}


function mostrarPrimerTabla(mayor, menor, capacidad) {
    let table = `    
        <table class="table">
            <h3>Events statistics</h3>
            <tr>
                <td class="titulo">Events whit the highest percentage of attendace</td>
                <td class="titulo">Events whit the lowest percentage of attendace</td>
                <td class="titulo">Events whit larger capacity</td>
            </tr>
            <tr>
                <td>${mayor[1].name} %  ${mayor[0]}</td>
                <td>${menor[1].name} % ${menor[0]}</td>
                <td>${capacidad.name} capacity ${capacidad.capacity}</td>
            </tr>          
         </table>`;

    contenedorTabla.innerHTML = table;
}

function mostrarTabla2(array, texto, contenedor ) {
    let table = `<h3> ` +  texto + ` events statistics by category </h3><table  class="table"><tr><td class="titulo">Category</td> <td class="titulo">Revenues</td><td class="titulo">Percentage of attendance</td></tr>`;

    array.forEach(aux => {
        table += `
      
                <tr>
                    <td >${aux[0]}</td>
                    <td > $ ${aux[1]}</td>
                    <td >% ${aux[2]}</td>
                </tr>               
           `;
    });
    table += ' </table>';
    contenedor.innerHTML = table;
}

function ordenarPorCapacidad(array) {
    array.sort(function (a, b) {
        if (a.capacity < b.capacity) {
            return 1;
        }

        if (a.capacity > b.capacity) {
            return -1;
        }
        return 0;
    });
}

function calculoPorcentajeAsistencia(array) {
    let porcentajeAsistencia = []
    array.forEach(element => {
        porcentajeAsistencia.push( Number((element.assistance / element.capacity) * 100).toFixed(2));
    });
    return porcentajeAsistencia;
}

function mayorPorcentajeAsistencia(array) {
    let array2 = [];
    array2 = calculoPorcentajeAsistencia(array);
    mayor = array2[0];

    array2.forEach(element => {
        if (element > mayor) {
            mayor = element;
        }
    });
    let posicion = array2.indexOf(mayor);
    let array3 = [mayor, array[posicion]];
    return array3;
}

function menorPorcentajeAsistencia(array) {
    let array2 = []
    array2 = calculoPorcentajeAsistencia(array);
    menor = array2[0];

    array2.forEach(element => {
        if (element < menor) {
            menor = element
        }
    });
    let posicion = array2.indexOf(menor);
    let array3 = [menor, array[posicion]];
    return array3;
}

function statsTabla2(array) {
    let categorias = listaDeCategoria(array);
    let arrayFinal = [];  

    for (let i = 0; i < categorias.length; i++) {
        let precioUnitario ;
        let asistenciaUnitario;
        let ganancia = 0;
        let arrayPorcategoria = []
        let asistenciaTotal =0; 

        for (let j = 0; j < array.length; j++) {          
            precioUnitario=0
            asistenciaUnitario=0

            if (array[j].category.toLowerCase() == categorias[i]) {               
                
                arrayPorcategoria.push(array[j]);      
                precioUnitario = array[j].price;
      
                if (array[j].hasOwnProperty("assistance")) {
                    asistenciaUnitario = array[j].assistance;                   
                } else {                  
                    asistenciaUnitario = array[j].estimate;
                }          
            }

            ganancia += precioUnitario * asistenciaUnitario;
            asistenciaTotal += asistenciaUnitario; 
        }

        let acum3 = 0;
        let capacidad =  arrayPorcategoria.reduce((acc, elemento) => acc + elemento.capacity, acum3)

        porcentajeCapacidad = (asistenciaTotal/capacidad)*100        
        let arrayCategoria = [categorias[i], ganancia, Number(porcentajeCapacidad.toFixed(2))];

        arrayFinal.push(arrayCategoria)
    }
    return arrayFinal;
}