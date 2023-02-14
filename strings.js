/* Aula sobre manipular Strings */

const nome = prompt('Digite seu nome completo: ')
let letra;

document.body.innerHTML += `Seu nome é: <b>${nome}<br/>`;
document.body.innerHTML += `Seu nome tem <b>${nome.length} letras<br/>`;
document.body.innerHTML += `A 2ª letra do seu nome é a Letra <b>"${letra = nome.charAt(1)}"<br/>`;
document.body.innerHTML += `Qual é o Primeiro Indice da LETRA <b>"${letra}"</b> de seu nome? <b>${nome.indexOf(letra)}<br/>`;
document.body.innerHTML += `Qual o Último Indice da LETRA <b>"${letra}"</b>do seu nome? <b>${nome.lastIndexOf(letra)}<br/>`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: <b>${nome.slice(-3)}<br/>`;
document.body.innerHTML += `As palavras do seu nome são: <b>${nome.split(' ')}<br/>`;
document.body.innerHTML += `Seu nome com letras maiúsculas: <b>${nome.toUpperCase()}<br/>`;
document.body.innerHTML += `Seu nome com letras minúsculas: <b>${nome.toLowerCase()}<br/>`;

alert(`Olá ${nome.toUpperCase()}, vamos realizar os testes.`)