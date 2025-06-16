"use strict"

// ARRAY 
let estudiantes = [
    { nombre: "Juliana", calificaciones: [85, 90, 70, 92]},
    { nombre: "Luis", calificaciones: [50, 60, 80, 88]},
    { nombre: "Valentina", calificaciones: [95, 88, 50, 90]},
];

// MOSTRAR ESTUDIANTES Y NOTA 
estudiantes.forEach(monstrarEstudiantes =>{
    console.log("lista de estudiantesy sus calificaciones:" , monstrarEstudiantes);
})

// CALCULAR PROMEDIO
function calcularPromedio(calificaciones) {
    let suma = calificaciones.reduce(function(total, nota) {
        return total + nota;
    }, 0);
    let promedio = suma / calificaciones.length;
    return promedio.toFixed(2);
}

// MOSTRAR INFORMACIÓN
estudiantes.forEach(function(estudiante) {
    console.log("Nombre:", estudiante.nombre);
    console.log("Calificaciones:", estudiante.calificaciones);
    console.log("Promedio:", calcularPromedio(estudiante.calificaciones));
});

// MEJOR CALIFICACIÓN 

estudiantes.forEach(function(estudiante){
    let notaMayor = Math.max(...estudiante.calificaciones);
    console.log("La calificación más alta fue: ", notaMayor);
});

// CALIFICACIÓN MÁS BAJA 

estudiantes.forEach(function(estudiante){
    let notaMenor = Math.min(...estudiante.calificaciones);
    console.log("La calificación más baja fue: ", notaMenor);
});

g