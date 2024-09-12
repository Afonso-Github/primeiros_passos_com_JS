function produtoImpares(valores) {
    let valoresImpares = valores.filter(valores => valores % 2 !== 0&&valores>7); 
        let product = 1; 
        for (let i=0; i<valoresImpares.length; i++) {
            product *= valoresImpares[i]; 
            } 
            return product; 
        }
        
console.log(produtoImpares([10,9,11,5,2,4,13]));