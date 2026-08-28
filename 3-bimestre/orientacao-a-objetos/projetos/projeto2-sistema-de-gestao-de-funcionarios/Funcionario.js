class Funcionario {
  static quantidade = 0

  constructor(nome, cargo, salario) {
    this.nome = nome
    this.cargo = cargo
    this._salario = salario >= 0 ? salario : 0
    Funcionario.quantidade++
  }

  get salario() {
    return this._salario
  }

  set salario(novoSalario) {
    if (novoSalario >= 0) {
      this._salario = novoSalario
    }
  }

  static quantidadeFuncionarios() {
    return Funcionario.quantidade
  }

  apresentar() {
    return `${this.nome} - ${this.cargo}`
  }
}

module.exports = Funcionario
