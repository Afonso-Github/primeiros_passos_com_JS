function decidirCompra(preco, parcelas, estouEndividado) {
    if(preco>=1000 && estouEndividado==false){
        console.log("Vou comprar");
    }
    else if(preco>=1000 && parcelas>=10){
        console.log("Vou comprar");
    }
    else if(preco>=750 && preco<1000 && parcelas>=5){
        console.log("Vou comprar");    
    }
    else if(preco==500){
        console.log("Vou comprar");
        
    }
    else{
        console.log("Não vou comprar");
    }
}
decidirCompra(1100,9, true);