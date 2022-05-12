class spaceship {
    constructor (name, crewQuantity){
        this.name = name
        this.crewQuantity = crewQuantity
        this.docked = false
        this.doors = false
    }

    docking(){
        this.docked = true
        this.doors = true
    }
}

let spaceshipList = []

function showMenu(){
    let chosenOption
    chosenOption = prompt("Digite a opção desejada: \n1 - Cadastrar a nave\n2 - Mostrar a lista de naves\n3 - Sair do programa")
    return chosenOption
}

function createSpaceship(){
    let spaceshipName = prompt("Qual o nome da sua nave?")
    let crewSize = prompt("Qual a quantidade de tripulantes?")
    let newSpaceship = new spaceship(spaceshipName, crewSize)
    return newSpaceship
}

function spaceshipListing(ships){
    let shipList = ""
    ships.forEach((ship, index)=> {
        shipList += (index + 1) + " - " + ship.name + " ( " + ship.crewQuantity + " tripulantes. Engatada: "
        + ship.docked + ". Portas abertas: " + ship.doors +")\n"
    });
    alert(shipList)
}

let chosenOption

while(chosenOption != "3"){
    chosenOption = showMenu()
    switch(chosenOption){
        case "1":
            let spaceshipNew = createSpaceship()
                if(confirm("Deseja engatar a nave e abrir as portas?")){
                    spaceshipNew.docking()
                }
            spaceshipList.push(spaceshipNew)
            break
        case "2":
            spaceshipListing(spaceshipList)
            break
        case "3":
            alert("Obrigado! Programa sendo encerrado!")
            break
        default:
            alert("Opção inválida, tente novamente!")
    }
}


