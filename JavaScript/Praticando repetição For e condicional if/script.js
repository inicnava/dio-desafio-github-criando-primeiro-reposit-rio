alert("Bem-vindo ao inversor de nomes de espaçonaves!")
let spaceshipName = prompt("Para começar, insira o nome da nave:")
let newSpaceshipName = ""
let forbiddenLetter = "e"

for(let i = spaceshipName.length - 1; i >= 0; i--){
    if(spaceshipName[i] == forbiddenLetter){
        break
    }
    else{
        newSpaceshipName += spaceshipName[i]
    }
}

alert("Nome antigo da nave: " + spaceshipName + "\nNovo nome da nave: " + newSpaceshipName)