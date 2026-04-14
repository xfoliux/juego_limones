function generarAleatorio(min,max){
    let random=Math.random(); // 0-1
    //EJEMPLO: max es 600, minimo es 5
    let numero = random*(max -min); // 0-max
    let numeroEntero = parseInt(numero);

        //EJEMPLO

    numeroEntero = numeroEntero + min;
    return numeroEntero;
}