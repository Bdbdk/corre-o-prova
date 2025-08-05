const prompt = require("prompt-sync")();

const n = parseInt(prompt("digite o numero de pessoas a cadastrar: "));

let nomes = []
let idades = []
let alturas = []


let soma = 0;
//não fica no for para não entrar em loop
let menoresde16 = 0;
let menores = []; //nome dos menores de 16

for( let i=0; i < n; i++){
    let nome = prompt("digite o nome da pessoa: ")
    nomes.push(nome)

    let altura = parseFloat(prompt("digite a altura da pessoa: "))
    alturas.push(altura)
    soma = soma + altura

    let idade = parseInt(prompt("digite a idade da pessoa: "))
    idades.push(idade)

    if (idade < 16){
        menoresde16++;
        menores.push(nome)
    }
}


let media = soma/n;
console.log("quantidade de pessoas menores de idade: " + menoresde16)
console.log("nomes: "+ menores)
console.log("media das alturas: " + media)