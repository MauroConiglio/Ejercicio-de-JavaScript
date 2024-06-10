//Ejercicios de String y Números
/*
1 - Crea una variable con tu nombre, otra con tu apellido y concaténalas con el mensaje de bienvenida: 'Bienvenido al evento' usando template string.
2 - Usando métodos de String quita los espacios de adelante y de atrás del siguiente texto: '              Había una vez un pequeño programador junior       '
3 - Convierte a mayúsculas tu nombre y apellido usando las variables definidas en el punto 1
4 - Crea un programita que le pida al usuario que ingrese un texto, convierte dicho texto en mayúsculas y muestra en consola cuantos caracteres tiene el texto recibido usando propiedades de los String.
5 - Crea un programa que solicite al usuario ingresar un número con 5 decimales, almacenar dicho número en una variable asegurándose que sea de tipo number. Mostrar en consola lo siguiente:
 - El número redondeado a su mayor valor
 - El número redondeado a su menor valor
 - El número original multiplicado por 3
 - El resto del número dividido por 2
*/


//1
let nombre = "Mauro";
let apellido = "Coniglio";
console.log(`Bienvenido al evento Sr ${nombre} ${apellido}`);

//2
let frase="              Había una vez un pequeño programador junior       "
let fraseSinEspacio= frase.trim()
console.log(fraseSinEspacio)

//3
console.log(nombre.toUpperCase() + " " + apellido.toUpperCase())


//4
let texto = prompt("Ingrese su nombre completo")
let textoMayusc=texto.toUpperCase()
console.log(`El texto tiene ${textoMayusc.length} caracteres`)

//5 

let numeroDs = prompt("Ingrese un numero decimal")
numeroNuevo= Number(numeroDs)
console.log(Math.ceil(numeroNuevo))
console.log(Math.floor(numeroNuevo))
console.log(numeroDs * 3)
console.log(numeroDs % 2)
