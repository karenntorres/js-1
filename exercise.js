"use strict";

// ARRAY DE ESTUDIANTES Y SUS CALIFICACIONES
let estudiantes = [
  { nombre: "Juliana", calificaciones: [85, 90, 70, 92] },
  { nombre: "Luis", calificaciones: [60, 60, 80, 88] },
  { nombre: "Valentina", calificaciones: [95, 88, 50, 90] },
];

// MOSTRAR ESTUDIANTES
function mostrarEstudiantes() {
  console.log("Lista de estudiantes:");
  estudiantes.forEach(est => {
    console.log(`- ${est.nombre}`);
  });
}

// PROMEDIO DE CALIFICACIONES -REDUCE
function calcularPromedio(calificaciones) {
  let suma = calificaciones.reduce((total, nota) => total + nota, 0);
  let promedio = suma / calificaciones.length;
  return promedio.toFixed(2);
}


// AGREGAR CALIFICACIÓN - PUSH
function agregarCalificacion() {
  let nombre = prompt("Nombre del estudiante:");
  let nota = Number(prompt("Ingrese la calificación (0 a 100):"));
  let estudiante = estudiantes.find(est => est.nombre === nombre);

  if (estudiante) {
    estudiante.calificaciones.push(nota);
    console.log(`Se agregó la nota ${nota} a ${nombre}.`);
  } else {
    console.log("Estudiante no encontrado.");
  }
}

// QUITAR CALIFICACIÓN - POP
function quitarCalificacion() {
  let nombre = prompt("Nombre del estudiante:");
  let estudiante = estudiantes.find(est => est.nombre === nombre);

  if (estudiante) {
    if (estudiante.calificaciones.length > 0) {
      let notaEliminada = estudiante.calificaciones.pop();
      console.log(`Se eliminó la nota ${notaEliminada} de ${nombre}`);
    } else {
      console.log("No hay calificaciones que eliminar.");
    }
  } else {
    console.log("Estudiante no encontrado.");
  }
}

// GENERAR REPORTE INDIVIDUAL 
function generarReporte() {
  let nombre = prompt("Nombre del estudiante:");
  let estudiante = estudiantes.find(est => est.nombre === nombre);

  if (estudiante) {
    let notas = estudiante.calificaciones.join(", ");
    let promedio = calcularPromedio(estudiante.calificaciones);
    let max = Math.max(...estudiante.calificaciones);
    let min = Math.min(...estudiante.calificaciones);

    console.log(`Reporte de ${nombre}`);
    console.log(`Notas: ${notas}`);
    console.log(`Promedio: ${promedio}`);
    console.log(`Nota más alta: ${max}`);
    console.log(`Nota más baja: ${min}`);
  } else {
    console.log("Estudiante no encontrado.");
  }
}

// MENÚ INTERACTIVO
let opcion = 0;
do {
  opcion = Number(prompt(`Bienvenido \n
  1. Mostrar estudiantes\n
  2. Agregar calificación\n
  3. Quitar calificación\n
  4. Generar reporte individual\n
  5. Salir`));

  switch (opcion) {
    case 1:
      mostrarEstudiantes();
      break;
    case 2:
      agregarCalificacion();
      break;
    case 3:
      quitarCalificacion();
      break;
    case 4:
      generarReporte();
      break;
    case 5:
      console.log("¡Hasta luego!");
      break;
    default:
      console.log("Opción no válida. Intenta de nuevo.");
  }
} while (opcion !== 5);
