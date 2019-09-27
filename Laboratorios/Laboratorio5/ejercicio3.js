function cuantasVecesRepite(unNumero,unArreglo){
    var ocurrencias = 0;
    for (let index = 0; index < unArreglo.length; index++) {
        if (unNumero == unArreglo[index]) {
            ocurrencias++;
        }
    }
    console.log(ocurrencias);
    return ocurrencias;
}