/* alt + shift + a */
console.log('Hola mundo')
/* console.log('Aquí podemos escribir cualquier cosa')
console.log('Adios')
console.log('No hay autocompletado')
console.log(12345)
console.log(-1.123) */

//Tipos de datos
//Declarar variable
let nombre = 'Emily'
console.log(nombre)
nombre = 'Rocio'
console.log(nombre)

let numero1 = 7
let numero2 = 9
let resultado = numero1 + numero2
console.log('Resultado: ', resultado)

//String - texto
const ciudad = 'Bogotá'
const pais = 'Colombia'
console.log(ciudad, pais)

//Declarar una constante
const pi = 3.1416
console.log(pi)

//Lenguaje debidamente tipado
//Int, float - numeros
const sumaa = 5
const edad = 20.5 
const numeronegativo = -10
console.log(sumaa,edad,numeronegativo)

//Booleando = verdadero o falso
let esVerde = true
let esMorado = false

//------Estructura de datos-------
//Array - vectores - listas

let listaDeNumeros = [20, -55, 100]
console.log(listaDeNumeros)

//Ver un elemento de la lista
//console.log(listaDeNumeros[0])
//console.log(listaDeNumeros[1])
//console.log(listaDeNumeros[2])

let listaCiudades = ["Bogotá", "Medellín", "Cali"]
console.log(listaCiudades)

let listaDeListas = [listaDeNumeros, listaCiudades]
console.log(listaDeListas)

//Acceder al dato "Medellín"
console.log(listaDeListas[1][1])

//JSON (JavaScript Object Notation) - Objetos
// clave - valor
let usuario = {
    nombre: "Emily",
    edad: 24,
    ciudad: "Bogotá",
    ubicacion :{
        latitud: 1.535498,
        longitud: -2.3452156
    }
}
//console.log(usuario)
//console.log(usuario.nombre)
//console.log(usuario.ubicacion.latitud)

//Tipos de datos vacios

//null - nulo
const espacioVacio = null

//Undefined - Indefinido
let noDefinido = undefined
//console.log(usuario.apellido)

//NaN -not a Number - No es un numero
const noEsNumero = NaN
const multiplicacion = 10 * 'hola'
//console.log(multiplicacion)


//-------Estructuras de control-----------
//bucle - Proceso que se repite
//loop - bucle infinito
const listaAnimales = [
    "perro",
    "gato",
    "oso",
    "gallina",
    "lobo",
    "zorro"
]

console.log('tamaño del array:', listaAnimales.length);

//Parametro 1: contador
//Parametro 2: Condición para que se detenga
//Parametro 3: Comportamiento del contador

for(let i = 0; i < listaAnimales.length; i++) {
    //console.log(i)
    //console.log(listaAnimales[i])
}

//condiciones
//igualdad: ===
//diferente: !==
//menor que: <
//mayor que: >
//menor o igual que: <=
//mayor o igual que: >=

let numero = 10

if (numero === 10) {
    console.log('La condición es verdadera')
}else if (numero === 11){
    console.log('La condición es falsa')
}else if (numero == 12) {
    console.log('Número es 12')
}else {
    console.log('El número ingresado no es ni 10, 11 y 12')
}

//Operadores lógicos
// and - y: &&
//or - o: ||

let texto = "c"
if(texto === "a" || texto === "b" || texto === "c") {
    console.log('La condición es verdadera')
} else {
    console.log('El texto no es a o b')
}

let numero3 = 20

if (numero3 > 0 && numero < 10) {
    console.log('Nuestro número está entre el 0 y 10')
} else {
    console.log('El número no está entre el 0 y el 10')
}


// ------- bucle - while ---

let contador = 0
while (contador < 5) {
    console.log("ciclo:", contador)
    contador ++

}


//-----Funciones-----
//Estructuras reciben parametros
//y devuelven parametros

//Caracteristícas
//1. Agrugar código relacionado a un cierto fin u objetivo
//2. La función es reutilizable

//declaración de la función JavaScript antiguo
function sumar(valor1, valor2) {
    let resultado = valor1 + valor2
    return resultado

    //console.log('Esta función está sumando')
    //let resultado = valor1 + valor2
    //console.log('Mostrar el resultado:', resultado)
}

//ejecución de la función \\ Llamado de la función
let resultadoSuma = sumar(5, 10)
console.log('Resultado de la suma:', resultadoSuma)


//Declaración de la función con ECMAScript
//funcion flecha
const suma = (valor1, valor2) => {
    let resultado = valor1 + valor2
    return resultado

}
