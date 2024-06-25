import { conexionApi } from "./conexionApi.js"




async function filtrarProductos ()  {

  const nombreProductoIngresado = document.querySelector("[data-buscar]").value;

  const busqueda = await conexionApi.buscarProductos(nombreProductoIngresado);

  const lista = document.querySelector("[data-lista]"); // trae todos los productos que se encuentran en data-lista del archivo index.html
    
}



filtrarProductos();