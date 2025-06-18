"use strict";

// ARRAY DE ESTUDIANTES Y SUS CALIFICACIONES
let estudiantes = [
    { nombre: "Juliana", calificaciones: [85, 90, 70, 92] },
    { nombre: "Luis", calificaciones: [60, 60, 80, 88] },
    { nombre: "Valentina", calificaciones: [95, 88, 50, 90] },
];

//PROMEDIO DE CALIFICACIONES - reduce y toFixed(2)

function calcularPromedio(calificaciones) {
    let suma = calificaciones.reduce(function(total, nota) {
        return total + nota;
    }, 0); 
    let promedio = suma / calificaciones.length;
    return promedio.toFixed(2); 
}

// MOSTRAR INFORMACIÓN COMPLETA DE CADA ESTUDIANTE - MATH.MAX Y MANTH.MIN

estudiantes.forEach(function(estudiante) {
    console.log("Nombre:", estudiante.nombre);
    console.log("Calificaciones:", estudiante.calificaciones.join(", ")); // el "join" muestra las notas separadas por coma
    console.log("Promedio:", calcularPromedio(estudiante.calificaciones));
    console.log("Calificación más alta:", Math.max(...estudiante.calificaciones));
    console.log("Calificación más baja:", Math.min(...estudiante.calificaciones));
    console.log("---------------------------"); // separador visual entre estudiantes, es como el hr en HTML
});

// AGREGAR UNA NOTA AL ARRAY Y BUSCAR ESTUDIANTE - FIND Y PUSH

function agregarNota(nombre, nota) {
  let estudiante = estudiantes.find(e => e.nombre === nombre);

  if (estudiante) {
    estudiante.calificaciones.push(nota);
    console.log(`Nota ${nota} agregada a ${nombre}`);
  } else {
    console.log(`Estudiante "${nombre}" no encontrado.`);
  }
}
agregarNota("Luis", 77);
agregarNota("Valentina", 80);
agregarNota("Pedro", 86);
agregarNota("Juliana", 91);

// ELIMINAR NOTAS
function eliminarNota(nombre) {
  let estudiante = estudiantes.find(e => e.nombre === nombre);

  if (estudiante) {
    if (estudiante.calificaciones.length > 0) {
      let notaEliminada = estudiante.calificaciones.pop();
      console.log(`Se eliminó la nota ${notaEliminada} de ${nombre}`);
    } else {
      console.log(`El estudiante ${nombre} no tiene notas para eliminar.`);
    }
  } else {
    console.log(`Estudiante "${nombre}" no encontrado.`);
  }
}

eliminarNota("Juliana");
eliminarNota("Luis");
eliminarNota("Valentina");

// Crear nuevo array con promedio actualizado
// map permite recorrer el array cy construir uno nuevo con lo que yo quiera en cada posición, por eso el orden del return: name, notes y promedio

let estudiantesConPromedio = estudiantes.map(est => { 
  return {
    nombre: est.nombre,
    calificaciones: est.calificaciones,
    promedio: calcularPromedio(est.calificaciones)
  };
});

// FILTRAR ESTUDIANTES APROBADOS 
let aprobados = estudiantesConPromedio.filter(est => est.promedio >= 75);

console.log("Estudiantes aprobados:");
aprobados.forEach(est => {
  console.log(`${est.nombre} - Promedio: ${est.promedio}`);
});

// ORDENAR ALFABETICAMENTE

let listaAlumnos = ["Luis", "Valentina", "Juliana"];
console.log(listaAlumnos);
listaAlumnos.sort();
console.log(listaAlumnos);

// GENERAR REPORTE INDIVIDUAL


