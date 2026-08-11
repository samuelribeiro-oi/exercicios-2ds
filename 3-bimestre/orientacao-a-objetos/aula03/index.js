class Animal {
    constructor(nome, especie) {
        this.nome = nome
        this.especie = especie
    }
}

const animal1 = new Animal('Rex', 'cachorro')
const animal2 = new Animal('Mimi', 'Gato')

const animais = [animal1, animal2]

module.exports = animais