let nombre = "Mauro";
let apellido = "Coniglio";
console.log(`Bienvenido al evento Sr ${nombre} ${apellido}`);

//2
let frase="              Había una vez un pequeño programador junior       "
let fraseSinEspacio= frase.trim()
console.log(fraseSinEspacio)

//3
console.log(nombre.toUpperCase() + " " + apellido.toUpperCase())


// //4
// let texto = prompt("Ingrese su nombre completo")
// let textoMayusc=texto.toUpperCase()
// console.log(`El texto tiene ${textoMayusc.length} caracteres`)

//5 

let numeroDs = prompt("Ingrese un numero decimal")
numeroNuevo= Number(numeroDs)
console.log(Math.ceil(numeroNuevo))
console.log(Math.floor(numeroNuevo))
console.log(numeroDs * 3)
console.log(numeroDs % 2)