const Vaga = require("./Vaga")

class MotoVaga extends Vaga {
  descricao() {
    return "Vaga para moto liberada"
  }
}

module.exports = MotoVaga