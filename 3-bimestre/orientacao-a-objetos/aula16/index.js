
class Veiculo {

    constructor(marca, modelo) {
        this.marca = marca
        this.modelo = modelo
    }

    descricao() {
        return `Marca: ${this.marca} | Modelo: ${this.modelo}`
    }

}

class Carro extends Veiculo {

    constructor(marca, modelo, portas) {
        super(marca, modelo)

        this.portas = portas
    }

    descricao() {
        return `${super.descricao()} | Portas: ${this.portas}`
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

    descricao() {
        return `${super.descricao()} | Cilindrada: ${this.cilindrada}cc`
    }

    ligarMotor() {
        return "O motor da moto foi ligado"
    }

}

// Criando os veículos

const carro = new Carro("Toyota", "Corolla", 4)

const moto = new Moto("Honda", "CG 160", 160)

// Exibindo informações

console.log("=== CARRO ===")
console.log(carro.descricao())
console.log(carro.abrirPortas())

console.log("\n=== MOTO ===")
console.log(moto.descricao())
console.log(moto.ligarMotor())