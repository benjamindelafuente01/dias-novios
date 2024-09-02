// Fecha de inicio
const fecha_inicio = '2024-09-07';

// Almacenamos los días transcurridos
calcular_dias = diasTranscurridos(fecha_inicio);

// Obtenemos el elemento de la pagina y establecemos los días
let dias = document.getElementById('dias-transcurridos');
dias.textContent = calcular_dias;

/*
    Función para calcular los días trancurridos
*/
function diasTranscurridos(fecha) {
    // Convertimos las fechas a objetos Date de JavaScript
    const fechaInicial = new Date(fecha);
    const fechaActual = new Date();
  
    // Calculamos la diferencia en milisegundos
    const diferenciaEnMilisegundos = fechaActual - fechaInicial;
  
    // Convertimos la diferencia a días (1 día = 86400000 milisegundos)
    const diasTranscurridos = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));
  
    return diasTranscurridos;
  }