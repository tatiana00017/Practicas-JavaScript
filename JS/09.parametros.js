'use strict'

function listadoFrutas(fruta1, fruta2, ...restoDeFrrutas){
    console.log(fruta1);
    console.log(fruta2);
    console.log(restoDeFrrutas);
}
var frutas = ["manzana","mora"]
listadoFrutas(...frutas,"naranja","banana");

