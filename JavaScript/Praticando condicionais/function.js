let pilotName = prompt("Qual seu nome, piloto?")
let velocity = 0
let shipVelocity = prompt("Para qual velocidade gostaria de acelerar a nave? (Km/s)")
let velocityConfirmation = confirm("Você confirma aceleração para " + shipVelocity + " Km/s?")


if (velocityConfirmation) {
    velocity = shipVelocity
}

if (shipVelocity <= 0) {
    alert("A nave está parada! Considere aumentar a velocidade!")
}
else if (shipVelocity < 40) {
    alert("Você está devagar! Considere aumentar a velocidade!")
}
else if (shipVelocity >= 40 && shipVelocity < 80) {
    alert("Velocidade atual é a ideal a ser mantida!")
}
else if (shipVelocity >= 80 && shipVelocity < 100) {
    alert("Velocidade alta! Considere diminuir!")
}
else {
    alert("Velocidade perigosa! Controle automático forçado!")
}

alert("Piloto comandando a nave atualmente: " + pilotName + "."
    + "\nVelocidade atual: " + shipVelocity + "Km/s.")

