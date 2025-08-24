'use strict'

var suma = 0;
var contador = 0;
var numero;
do {
    numero = 0;
    numero = prompt("Introduce un numero");
    if (numero>0) {
        suma = Number(numero)+Number(suma);
        contador++;
        console.log(numero)
        console.log(suma)

    }

} while (numero > 0)
var promedio = suma / contador;
alert("La suma total es: " + suma + " y el promedio es " + promedio);
