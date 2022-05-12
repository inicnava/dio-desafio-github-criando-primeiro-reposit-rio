alert("Bem-vindo ao comando central da nave!")
let shipName = prompt("Para começarmos, insira o nome da sua nave: ")
let velocityStart = 0
let newVelocity = velocityStart
let menuOption = ""

function speedUp(velocity, acceleration = 5) {
    newVelocity = velocity + acceleration
    return newVelocity
}

function speedDown(velocity, acceleration = 5) {
    if (velocity >= 5) {
        newVelocity = velocity - acceleration
        return newVelocity
    }
    else {
        alert("A nave está parada!")
        newVelocity = velocity
        return newVelocity
    }
}

function insideReport() {
    alert("Nome da nave: " + shipName + "\nVelocidade atual: " + newVelocity + "Km/s")
}

function showMenu() {
    let menuOption = prompt("Qual opção deseja escolher:\n1 - Acelerar a nave 5km/s\n2 - Desacelerar a nave 5km/s\n3 - Imprimir dados de bordo \n4 - Sair do menu")
    return menuOption
}

function optionFour() {
    alert("Obrigado, encerrando menu!")
}

alert("O menu do sistema conta com 4 opções: \n1 - Acelerar a nave em 5km/s \n2 - Desacelerar a nave em 5km/s \n3 - Iprimir dados de bordo \n4 - Sair do menu")


while (menuOption != "4") {
    menuOption = showMenu()
    switch (menuOption) {
        case "1":
            newVelocity = speedUp(newVelocity)
            break
        case "2":
            newVelocity = speedDown(newVelocity)
            break
        case "3":
            insideReport()
            break
        case "4":
            optionFour()
            break
        default:
        alert("Opção inválida, tente novamente!")
    }
}



