function acheMediano(numeros) {
    //let numeros = [2, 6, 5, 10,20]
    let resultado = numeros.length % 2
    if (resultado == 0) {
        var resultado1 = ((numeros.length) / 2)
        var resultado2 = ((numeros.length) / 2 - 1)
        var meio1 = numeros[resultado1];
        var meio2 = numeros[resultado2];
        var mediaPar = (meio1 + meio2) / 2;
        return mediaPar 
    }
    
    resultado = ((numeros.length + 1) / 2 - 1)
    let meio = numeros[resultado];
    return meio
}

achei = acheMediano([2, 6, 5, 10,20,30]);
console.log(achei);

