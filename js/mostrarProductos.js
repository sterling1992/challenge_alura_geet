import { conexionApi } from "./conexionApi.js";

const listaProductos = document.querySelector("[data-lista]");

export default function crearCardProductos(nombreProducto, precioVenta, imagenProducto) {
  const producto = document.createElement("li");
  producto.className = "productos_item";
  producto.innerHTML = `
    <div class = "container__style__productos">
      <div class="container__image__product">
        <img style = "max-width:300px; height:300px "  src="${imagenProducto}" alt="${nombreProducto}">
        <h3 class = "name__product"> ${nombreProducto}</h3>
        <h4 class = "sale__product__price"> ${precioVenta} COP</h4>
      </div>
    </div>`;
  return producto;
}

async function mostrarProductos() {
  try {
    const listaApi = await conexionApi.mostrarProductos();
    listaApi.forEach(producto => {
      listaProductos.appendChild(crearCardProductos(producto.nombreProducto, producto.precioVenta, producto.imagenProducto));
    });
  } catch (e) {
    console.log("Error al mostrar los productos:", e);
  }
}

mostrarProductos();



// import { conexionApi } from "./conexionApi.js";

// const listaProductos = document.querySelector("[data-lista]");

// export default function crearCardProductos(nombreProducto,precioVenta,url,imagenProducto){
//   const producto = document.createElement("li");

//   producto.className="productos_item";
//   producto.innerHTML = `
//       <div >
//         <img  src="${imagenProducto}" alt="">
//         <h3>${nombreProducto}</h3>
//         <h4>${precioVenta}</h4>
//       </div>`;

//   return producto;
// }


// async function mostrarProductos() {
//   const listaApi = await conexionApi.mostrarProductos()



//   listaApi.forEach(producto => listaProductos.appendChild(crearCardProductos(producto.nombreProducto, producto.precioVenta, producto.imagenProducto)));
// }

// mostrarProductos();