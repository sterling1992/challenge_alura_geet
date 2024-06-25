// CREACIÓN DE SOLICITUD GET
async function mostrarProductos() {
  const conexion = await fetch("http://localhost:3000/productos");
  const conexionConvertida = await conexion.json();
  return conexionConvertida;
}

// CREACIÓN SOLICITUD POST
async function enviarProducto(nombreProducto, precioVenta, precioCosto, imagenProducto) {
  const conexion = await fetch("http://localhost:3000/productos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nombreProducto,
      precioVenta,
      precioCosto,
      imagenProducto
    })
  });

  if (!conexion.ok) {
    throw new Error("Ha ocurrido un error al enviar el producto");
  }

  const conexionConvertida = await conexion.json();
  return conexionConvertida;
}


async function buscarProductos(palabraClave){
  const conexion = await fetch(`http://localhost:3000/productos?q = ${palabraClave}`);
  const conexionConvertida = await  conexion.json();
  return conexionConvertida;


}
// Exportación de la conexioApi
export const conexionApi = {
  enviarProducto,
  mostrarProductos, 
  buscarProductos
};



