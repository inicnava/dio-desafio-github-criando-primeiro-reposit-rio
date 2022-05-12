let shipVelocity = 150

function slowDown(velocity){
    velocity -= 20
    return velocity
}

function slowStop(velocity){
    velocity = shipVelocity
    while(velocity > 0){
        velocity = slowDown(velocity)
        if(velocity < 0){
            velocity = 0
        }
    alert("Diminuindo velocidade, atualmente a " + velocity + "km/s")
    }
}

let chosenOption = prompt("Bem-vindo ao controle da nave, sua velocidade atual é de 150km/s\nVocê gostaria de diminuir?\n1 - Sim\n2 - Não")

switch(chosenOption){
    case "1":
        slowStop(shipVelocity)
        alert("Nave parada! As comportas já podem ser abertas!")
        break
    case "2":
        alert("Cancelando sistema de paradas!")
        break
    default:
        alert("Opção inválida!")
        break
}