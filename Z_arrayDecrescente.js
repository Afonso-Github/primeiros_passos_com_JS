function criaArrayDecrescente(x) {
    let lista = [x];
    for (let i = x; i > 1; i--) {
       lista.push(i-1);
    }
    console.log(lista);
}
criaArrayDecrescente(10);