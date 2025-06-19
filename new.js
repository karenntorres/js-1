// creaar un arreglo de objetos que tenga empleados que contenga dos roles: admin y user

"use strict"

let empleados = [
    { 
        id: 1,
        nombre: "Ana",
        rol: "admin"
    },
    {
        id: 2,
        nombre: "Carlos",
        rol: "user"
    },
    {
        id: 3,
        nombre: "Luisa",
        rol: "admin"
    }
];

// traer a los que tiene el rol de "admin"

let admins = empleados.filter(function(roll){
    return roll.rol === "admin";
})

console.log(admins);

