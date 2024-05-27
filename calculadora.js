// ------ Ejercicio de lectura y escritura ----
console.log('Hola, bienvenidos')
const mostrarValor = () => {
    const input1 = document.getElementById('valor1')
    let valor1 = input1.value
    console.log(valor1)
    console.log('Mostrando valor')

    const span = document.getElementById('input-valor')
    console.log(span)
    console.log(span.innerHTML)
    span.innerHTML = valor1
}

//--- Calculadora ----
//LeerInputs, debe leer 2 inputa, validarlos
//y devolver estos valores
const leerInputs = () => {
    console.log('Leyendo inputs..')
    const inputNumero1 = document.getElementById('input-numero-1')
    const inputNumero2 = document.getElementById('input-numero-2')

    //Obtenemos los valores de los inputs
    let numero1 = inputNumero1.value
    let numero2 = inputNumero2.value
    console.log('Valores desde el input',numero1,numero2)

    //Validar que no este vacio el campo
    if(numero1 == '') {
        //Anunciar un error
        alert("El valor 1 no existe o contiene caracteres no numericos")
        //interrumpir la ejecución
        return null
    }

    if(numero2 == '') {
        //Anunciar un error
        alert("El valor 2 no existe o contiene caracteres no numericos")
        //interrumpir la ejecución
        return null
    }

    //parse - cambiar el tipo de dato
    numero1 = parseInt(numero1)
    numero2 = parseInt(numero2)
    console.log(numero1,numero2)

    const numerosValidados = {
        numero1: numero1,
        numero2: numero2
    }

    return numerosValidados

    //Otra manera de devolver un Json
    /* return {
        numero1: numero1,
        numero2: numero2
    }*/
}

//realizarOperación, debe recibir el tipo de
//operación, realizar la operación con los 2
//valores de los inputs
const realizarOperacion = (operacion) => {
    const numeros = leerInputs()
    if (numeros === null) {
        return
    }
    console.log(operacion, "con los números:", numeros.numero1, "y", numeros.numero2)

    let resultado = 0
    //Validar operación
    if (operacion === 'suma') {
        resultado = numeros.numero1 + numeros.numero2
    }

    if (operacion === 'resta') {
        resultado = numeros.numero1 - numeros.numero2
    }

    if (operacion === 'multiplicacion') {
        resultado = numeros.numero1 * numeros.numero2
    }

    if (operacion === 'division') {
        resultado = numeros.numero1 / numeros.numero2
    }

    //console.log("Resultado: ", resultado)
    mostrarResultado(resultado, operacion)

}

//mostrarResultado debe recibir el resultado
//de la operacion y mostrarlo al usuario,
//además debe modificar el simbolo de operación
//que realizó
const mostrarResultado = (resultado,operacion) => {
    console.log(resultado)
    const spanResultado = document.getElementById('resultado')
    spanResultado.innerText = resultado

    const spanOperacion = document.getElementById('operacion')
    
    if (operacion === 'suma') {
        spanOperacion.innerText = '+'
    }

    if (operacion === 'resta') {
        spanOperacion.innerText = '-'
    }

    if (operacion === 'multiplicacion') {
        spanOperacion.innerText = 'x'
    }

    if (operacion === 'division') {
        spanOperacion.innerText = '/'
    }
}

