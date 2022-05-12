const hitchedSpaceships = [
    ["Fênix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

let crewGreaterThan9 = hitchedSpaceships.filter(spaceship => {
    return spaceship[1] > 9
}).map(spaceship => {
    return spaceship [0]
})

let uppercaseSpaceships = hitchedSpaceships.map(spaceship => {
    return spaceship[0].toUpperCase()
})

let dockingProcces = hitchedSpaceships.findIndex(spaceship => {
    return spaceship[2] == false
})

let message = "Naves com tripulação maior que 9: " + crewGreaterThan9.join(", ")
message += "\nPlataforma em processo de acoplagem: " + (dockingProcces + 1)
message += "\nNomes das espaçonaves: " + uppercaseSpaceships.join(", ")

alert(message)