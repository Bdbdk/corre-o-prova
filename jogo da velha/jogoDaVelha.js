const prompt = require("prompt-sync")()

let tabuleiro = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]

let jogadorAtual = "x"

function mostrarTabuleiro(){
    console.log("Produto: ",  tabuleiro[0])


    console.log("Numero de linhas da matriz: ",  tabuleiro.length)
    console.log("Numero de colunas da matriz: ",  abuleiro[0].length)
    
    // Percorrendo uma matriz
    for (let i = 0 ; i < tabuleiro.length ; i++) {
    for (let j = 0; j < tabuleiro[0].length; j++) {
    console.log(`Elemento na posição [${i}][${j}]:   ${tabuleiro[i][j]} `)
    }
    }
}

function verificarVencedor(){

}

function verificarEmpate(){

}

function alternarJogador(){
    if (jogadorAtual === "x"){
        jogadorAtual = "o"
    } else{
        jogadorAtual = "x"
    }
}
while (true){

   let linha = parseInt(prompt("digite o numero da linha: "))
   let coluna = parseInt(prompt("digite o numero da coluna: "))

   tabuleiro[linha][coluna]=jogadorAtual
   if (jogadorAtual === "x"){
    jogadorAtual = "o"
    } else{
    jogadorAtual = "x"
    }
   



   console.log(tabuleiro)

}