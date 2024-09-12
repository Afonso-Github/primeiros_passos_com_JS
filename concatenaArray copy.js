function concatenaArray(palavras) {

    if(palavras.length==0){
        return "vazio";
    }
    else{
        let resultado="";
        for(let i=0; i<palavras.length; i++){
            resultado+=palavras[i]
    }
    return resultado;    
    }
    }
console.log(concatenaArray([]));




