alert("Bem-vindo ao conversor de distâncias espaciais!")
let distanceLY = prompt("Qual distância em anos-luz deseja converter?")
alert("Este programa converte para 3 distâncias dierentes: \n1 - Parsec (pc)\n2 - Unidade Astronômica (AU)\n3 - Quilômetros (km)")
let distanceOption = prompt("Para qual unidade de distância deseja converter:\n1 - Parsec (pc)\n2 - Unidade Astronômica (AU)\n3 - Quilômetros (km)")

switch(distanceOption){
    case "1":
        alert("Distância selecionada: Parsec (pc)")
        let distanceParsec = distanceLY * 0.306601
        alert("Distância em anos luz: " + distanceLY + " l.y." + "\nDistância em Parsec: " + distanceParsec + " pc")
        break
    case "2":
        alert("Distância selecionada: Unidade Astronômica (AU)")
        let distanceAU = distanceLY * 63241.1
        alert("Distância em anos luz: " + distanceLY + " l.y." + "\n Distância em Unidade Astronômica: " + distanceAU + " AU")
        break
    case "3":
        alert("Distância selecionada: Quilômetros (Km)")
        let distanceKm = distanceLY * (9.5 * Math.pow(10,12))
        alert("Distância em anos luz: " + distanceLY + " l.y." + "\nDistância em Quilômetros: " + distanceKm + " Km")
        break
    default:
        alert("Distância em anos luz: " + distanceLY + "\nUnidade de conversão não identificada: Conversão fora do escopo.")
}