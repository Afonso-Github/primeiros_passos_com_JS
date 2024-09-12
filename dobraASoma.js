function dobraASoma() {
    let soma = 0;
    let lista = [2,3,4]
    for (let i=0;i<lista.length; i++){
        soma+=lista[i];
        resultado=soma/lista.length
    }
return resultado;

}
console.log(Number.isPair(dobraASoma()));