
var numeros = new Array();

for(var i = 0; i < 6; i++){
    numeros.push(parseInt(prompt("Introduzca el numero "+ (i+1))));
}

function mostrarNumeros(array){
    for (var index in array) {
        document.write(array[index]+"<br/>");
        console.log(array[index]);
    }
}





document.write("Numeros originales <br/>");
console.log("Numeros originales");

mostrarNumeros(numeros);

var numerosOrd = numeros.sort(function(a, b){
    return a - b;
})

document.write("Numeros ordenados <br/>");
console.log("Numeros ordenados");

mostrarNumeros(numerosOrd);

var numerosRev = numeros.sort(function(a, b){
    return b - a;
})

document.write("Numeros ordenados en reversa <br/>");
console.log("Numeros ordenados en reversa");

mostrarNumeros(numerosRev);


document.write("Hay "+ numeros.length+" numeros <br/>");
console.log("Hay "+ numeros.length+" numeros");
