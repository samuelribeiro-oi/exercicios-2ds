const Vaga = require("./Vaga")

class Preferencial extends Vaga {
  descricao() {
    return "Vaga preferencial liberada"
  }
}

module.exports = Preferencial