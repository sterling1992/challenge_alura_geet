import { conexionApi } from "./conexionApi.js";

const formulario = document.querySelector("[data-form]");

async function crearProducto(evento) {
  evento.preventDefault();

  const nombreProducto = document.querySelector("[data-name-product]").value;
  const precioVenta = document.querySelector("[data-sales-price]").value;
  const precioCosto = document.querySelector("[data-cost-price]").value;
  const imagenInput = document.querySelector("[data-load-image]").files[0];

  if (!imagenInput) {
    alert("Por favor, selecciona una imagen.");
    return;
  }

  const imagenProducto = await convertirImagenBase64(imagenInput);

  try {
    await conexionApi.enviarProducto(nombreProducto, precioVenta, precioCosto, imagenProducto);
    window.location.href = "../pages/envioExitoso.html";
  } catch (e) {
    alert(e);
  }
}

// Conservsión de imagenes a Base 64
function convertirImagenBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

formulario.addEventListener("submit", crearProducto);



