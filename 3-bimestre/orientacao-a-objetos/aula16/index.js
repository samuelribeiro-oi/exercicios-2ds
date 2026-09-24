
class Veiculo {

    constructor(marca, modelo) {
        this.marca = marca
        this.modelo = modelo
    }

    apresentar() {
        return `${this.marca} ${this.modelo}`
    }

    descricao() {
        return this.apresentar()
    }

}

class Carro extends Veiculo {

    constructor(marca, modelo, portas) {
        super(marca, modelo)

        this.portas = portas
    }

    abrirPortas() {
        return "As portas do carro foram abertas"
    }

}

class Moto extends Veiculo {

    constructor(marca, modelo, cilindrada) {
        super(marca, modelo)

        this.cilindrada = cilindrada
    }

    ligarMotor() {
        return "O motor da moto foi ligado"
    }

}

module.exports = {
    Veiculo,
    Carro,
    Moto
}

if (require.main === module) {

    const carro = new Carro("Toyota", "Corolla", 4)
    const moto = new Moto("Honda", "CG 160", 160)

    console.log("=== CARRO ===")
    console.log(carro.apresentar())
    console.log(carro.abrirPortas())

    console.log("\n=== MOTO ===")
    console.log(moto.apresentar())
    console.log(moto.ligarMotor())

}