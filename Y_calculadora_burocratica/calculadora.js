function calculadoraMagica(){
    let x = prompt('digite o primeiro número');
    let operacao=prompt('Digite 1 para multiplicar / 2 para somar / 3 para dividir');

    let y = prompt('Digite o segundo número');
   
    let a=parseInt(x);
    let b=parseInt(y);
    let resultado=0;
    if(operacao==="1"){
        resultado=a*b;
    }
    else if(operacao==="2"){
        resultado=a+b;
    }
    else{
        resultado=a/b;
    }
    
alert('o resultado é: '+ resultado)
}