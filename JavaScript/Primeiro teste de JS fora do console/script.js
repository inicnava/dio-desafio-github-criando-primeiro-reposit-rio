let olderName = prompt("Informe o nome da pesoa mais velha: ")
let olderAge = parseInt(prompt("Insira a idade da pessoa mais velha: "))
let youngerName = prompt("Insira o nome da pessoa mais nova: ")
let youngerAge = parseInt(prompt("Insira a idade da pessoa mais nova: "))
let ageDifference = olderAge - youngerAge
alert(
    "Pessoa mais velha: " + olderName + "\nIdade: " + olderAge +
    "\n\nPessoa mais nova: " + youngerName + "\nIdade: " + youngerAge +
    "\n\nDiferença de idade: " + ageDifference + " anos")
