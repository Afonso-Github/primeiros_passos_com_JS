function mediaDaTurma(notas) {
    let soma = 0;
	for(let i=0;i<notas.length;i++){
        soma+=notas[i];
        media=soma/notas.length;
    }
    return media;
}
console.log(mediaDaTurma([2,10]));