let spaceship = {
    name: "" ,
    type: "",
    velocity: 0,
    maxSpeed: parseInt(),
    speedUp: function(acceleration){
        acceleration = parseInt(prompt("Quantos km/s deseja acelerar?"))
        this.velocity += acceleration
        if(this.velocity > this.maxSpeed){
            alert("ALERTA, VELOCIDADE MÁXIMA ULTRAPASSADA! ALTO PERIGO DE COMBUSTÃO! \nVelocidade atual: " + this.velocity + "km/s" + "\nVelocidade máxima: " + this.maxSpeed + "km/s")
        }
    },
    speedDown: function(acceleration){
        acceleration = parseInt(prompt("Quantos km/s deseja diminuir?"))
        this.velocity -= acceleration
        if(this.velocity > this.maxSpeed){
            alert("ALERTA, VELOCIDADE MÁXIMA ULTRAPASSADA! ALTO PERIGO DE COMBUSTÃO! \nVelocidade atual: " + this.velocity + "km/s" + "\nVelocidade máxima: " + this.maxSpeed + "km/s")
        }
    },
    spaceshipStop: function(){
        alert("Nave parada. \nNome da nave: " + this.name + "\nTipo de nave: " + this.type + "\nÚltima velocidade registrada: " + this.velocity + "km/s")
    }
}

spaceship.name = prompt("Qual o nome da sua nave?")
spaceship.type = prompt(spaceship.name + " é uma nave de qual tipo?")
spaceship.maxSpeed = prompt("Qual a velocidade máxima de " + spaceship.name + "?")

do{
    command = parseInt(prompt("Qual comando deve ser dado a nave?\n1 - Acelerar\n2 - Diminuir velocidade\n3 - Parar"))
    if (command == 1){
        spaceship.speedUp()
    } else if (command == 2){
        spaceship.speedDown()
    } else{
        spaceship.spaceshipStop()
    }
}while (command != 3)