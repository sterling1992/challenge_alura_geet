import { conexionApi } from "./conexionApi.js"
import crearCardProductos from "./mostrarProductos.js";


async function filtrarProductos (evento)  {

  evento.preventDefault();

  const nombreProductoIngresado = document.querySelector("[data-buscar]").value;
  console.log(`Datos a buscar: ${nombreProductoIngresado}`);

  const busqueda = await conexionApi.buscarProductos(nombreProductoIngresado);

  const lista = document.querySelector("[data-lista]"); // trae todos los productos que se encuentran en data-lista del archivo index.html
  
  // Limpiar la lista de productos existentes encontrados
  while(lista.firstChild){
    lista.removeChild(lista.firstChild);
  }

  // Creación de las nuevas cards que correspondan con la palabra de busqueda ingresada

  const cards = busqueda
        .filter(producto => producto.nombreProducto.includes(nombreProductoIngresado))
        .map(producto => crearCardProductos(producto.nombreProducto, producto.precioVenta, producto.imagenProducto));

 // Añadir las cards a la lista
 cards.forEach(card => lista.appendChild(card));

  if (cards.length === 0) {
      lista.innerHTML = `<h2 class="mensaje_titulo">No fueron encontrados elementos para ${nombreProductoIngresado} </h2>`;
  }


}


const botonBuscar = document.querySelector("[data-button-buscar]");
botonBuscar.addEventListener("click", evento => filtrarProductos(evento));