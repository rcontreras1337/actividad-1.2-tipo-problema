var edad = prompt("Ingrese su edad: ")
console.log("La edad ingresada es: "+edad)
var resultado = ""


// function verificar(edad){
//     if(edad>0 && edad<=18){
//         resultado = "Usted es un Joven"
//     } else if (edad>18 && edad<=40){
//         resultado = "Usted es adulto Joven"
//     } else if(edad>60){
//         resultado = "Usted es adulto Mayor"
//     } else {
//         resultado = "Ha ingresado la edad en un rango no controlado"
//     }
//     return resultado
// }

// alert("Según la edad ingresada, "+verificar(parseInt(edad)))

// const verificar = (edad) => {
//     if(edad>0 && edad<=18){
//         resultado = "Usted es un Joven"
//     } else if (edad>18 && edad<=40){
//         resultado = "Usted es adulto Joven"
//     } else if(edad>60){
//         resultado = "Usted es adulto Mayor"
//     } else {
//         resultado = "Ha ingresado la edad en un rango no controlado"
//     }
//     return resultado;
// }; 
const verificar = (edad) => edad>0 && edad<=18? resultado = "Usted es un Joven"
                             : edad>18 && edad<=40 ? resultado = "Usted es adulto Joven" 
                             : edad>60 ? resultado = "Usted es adulto Mayor" 
                             : resultado = "Ha ingresado la edad en un rango no controlado"; 

alert(`Según la edad ingresada, ${verificar(parseInt(edad))}`)

// Transformar a versión ES6
// Transformar a función flecha, cambiar la concatenación a Interpolación