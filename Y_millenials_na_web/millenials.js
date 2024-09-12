let nome=prompt('Bem vindo! Digite seu nome');
let novoTexto=document.querySelector('.boas-vindas');
novoTexto.innerHTML=`Olá ${nome}! Como está? :)`;