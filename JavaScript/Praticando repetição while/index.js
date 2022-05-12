alert("Bem-vindo ao comando da nave, piloto!")
let shipName = prompt("Para começar, insira o nome da sua nave:")
let wormHole = prompt("Deseja entrar na dobra espacial? \n1 - Sim\n2 - Não")
let wormHoleWarps = 0

while(wormHole == "1"){
    wormHoleWarps += 1
    wormHole = prompt("Deseja realizar a próxima dobra?\n1 - Sim\n2 - Não")
}

alert("Dobras encerradas!\nRelatório da espaçonave: \nNome da nave: " + shipName + "\nNúmero de dobras em sequencia: " + wormHoleWarps)