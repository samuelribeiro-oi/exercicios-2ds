const CarroVaga = require("./CarroVaga")
const MotoVaga = require("./MotoVaga")
const Preferencial = require("./Preferencial")

class VagaFactory {
  static criar(tipo, identificador, andar) {
    if (tipo === "carro") {
      return new CarroVaga(identificador, andar)
    }

    if (tipo === "moto") {
      return new MotoVaga(identificador, andar)
    }

    if (tipo === "preferencial") {
      return new Preferencial(identificador, andar)
    }

    throw new Error("Tipo de vaga inválido")
  }
}

module.exports = VagaFactory