alert("Bem-vindo ao mascarador de nomes de espaçonave!")
let spaceshipName = prompt("Para prosseguir, insira o nome da nave: ")
let oldLetter = prompt("Nome de nave selecionado: " + spaceshipName + "\nInsira qual caractere deseja substituir:")
let newLetter = prompt("Caractere selecionado: " + oldLetter + "\nDeseja subtituir por qual caractere: ")
let newSpaceshipName = ""

for(let i = 0; i < spaceshipName.length; i++){
    if(spaceshipName[i] == oldLetter){
        newSpaceshipName += newLetter
    }
    else{
        newSpaceshipName += spaceshipName[i]
    }
}

alert("Nome antigo da nave: " + spaceshipName + "\nNovo nome da nave: " + newSpaceshipName)