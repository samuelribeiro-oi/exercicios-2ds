const Vaga = require("./Vaga")

class CarroVaga extends Vaga {
  constructor(identificador, andar) {
    super(identificador, andar)
    this.registros = []
  }

  descricao() {
    return "Vaga para carro liberada"
  }

  adicionarRegistro(registro) {
    this.registros.push(registro)
  }
}

module.exports = CarroVaga