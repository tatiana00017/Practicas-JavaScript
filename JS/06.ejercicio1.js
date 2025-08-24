'use strict'

var numero1 =prompt("Escribe numero1")
var numero2 =prompt("Escribe numero2")

if (numero1 > numero2){
    alert("El numero "+numero1+" es el mayor, y el numero menor es "+numero2)
} else if (numero2 > numero1){
    alert("El numero "+numero2+" es el mayor, y el numero menor es "+numero1)
} else {
    alert("Los dos numeros son iguales")
}