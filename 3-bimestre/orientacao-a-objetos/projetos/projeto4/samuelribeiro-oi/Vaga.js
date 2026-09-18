class Vaga {
  #identificador
  #andar

  constructor(identificador, andar) {
    this.#identificador = identificador
    this.#andar = andar
  }

  get identificador() {
    return this.#identificador
  }

  get andar() {
    return this.#andar
  }

  descricao() {
    return "Vaga cadastrada no sistema"
  }
}

module.exports = Vaga