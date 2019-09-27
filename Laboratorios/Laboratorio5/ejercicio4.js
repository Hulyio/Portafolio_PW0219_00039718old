Elabore una función que llene un arreglo con 20 números 
de forma aleatoria (random), y que pida al usuario adivinar 
un número, si lo adivina mostrará un mensaje indicando
que ganó, si no mostrará que perdió.

function adivinaNumero(unNumero) {
    var elArreglo = new Array;
    var resultado="perdiste";
    for (let index = 0; index < 20; index++) {
        elArreglo.push(Math.floor(Math.random() * 20))   
    }
    console.log(elArreglo);
    for (let index = 0; index < elArreglo.length; index++) {
        if (elArreglo[index] == unNumero) {
            resultado="ganaste";
        }
    }
    return resultado;
}