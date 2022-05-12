let departureDateEntry = prompt("Digite a data de partida: \nFormato: DD/MM/YYYY")
let departureDate = moment(departureDateEntry, "DD/MM/YYYY")
let today = moment()
let dateDiff = today - departureDate
let chosenOption = prompt("Como gostaria de exibir o tempo de partida:\n1 - Segundos\n2 - Minutos\n3 - Horas\n4 - Dias")

if(chosenOption == "1"){
    let secondsOfDeparture = Math.round(dateDiff / 1000)
    alert("O tempo total de vôo é de " + secondsOfDeparture + " segundos.")
}
else if(chosenOption == "2"){
    let minutesOfDeparture = Math.round(dateDiff / 1000 / 60)
    alert("O tempo total de vôo é de " + minutesOfDeparture + " minutos.")
}
else if(chosenOption == "3"){
    let hoursOfDeparture = Math.round(dateDiff / 1000 / 60 / 60)
    alert("O tempo total de vôo é de " + hoursOfDeparture + " horas.")
}
else if(chosenOption == "4"){
    let daysOfDeparture = Math.round(dateDiff / 1000 / 60 / 60 / 24)
    alert("O tempo total de vôo é de " + daysOfDeparture + " dias.")
}
else{
    alert("Opção inválida!")
}