// Importamos API para poder llamar la data
import { API } from "./API.js";
// Importamos UI para poder llamar el metodo mostrarData
import { UI } from "./UI.js";
// Instancia de API en la variable api
const api = new API();
// Instancia de UI en la variable ui
const ui = new UI();

// El evento DOMContentLoaded escucha cuando el DOM ha sido cargado
// en ese momento podemos ejecutar lo que queramos
document.addEventListener("DOMContentLoaded", async () => {
  // hacemos la petición a la api para obtener datos
  // recordar que es una petición asíncrona
  let data = await api.obtenerDatos();
  // mostramos datos por consola
  // console.log(data);
  // mostramos los blogs en pantalla
  ui.MostrarDatos(data);
});
