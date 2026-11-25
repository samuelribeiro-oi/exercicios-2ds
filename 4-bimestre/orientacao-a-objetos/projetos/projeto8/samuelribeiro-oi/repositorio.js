const fs = require("fs/promises")

const arquivo = process.env.ARQUIVO_RESERVAS || "reservas.json"

async function listar() {
    try {
        const dados = await fs.readFile(arquivo, "utf8")

        return JSON.parse(dados)

    } catch (erro) {
        if (erro.code === "ENOENT") {
            return []
        }

        throw erro
    }
}

async function salvar(reserva) {
    const lista = await listar()

    lista.push(reserva)

    await fs.writeFile(
        arquivo,
        JSON.stringify(lista, null, 2)
    );

    return reserva
}

async function atualizar(id, dados) {
    const lista = await listar()

    const indice = lista.findIndex(
        reserva => reserva.id === id
    )

    if (indice === -1) {
        return null
    }

    lista[indice] = {
        ...lista[indice],
        ...dados,
        id: lista[indice].id
    }

    await fs.writeFile(
        arquivo,
        JSON.stringify(lista, null, 2)
    )

    return lista[indice]
}

async function remover(id) {
    const lista = await listar()

    const novaLista = lista.filter(
        reserva => reserva.id !== id
    )

    if (novaLista.length === lista.length) {
        return false
    }

    await fs.writeFile(
        arquivo,
        JSON.stringify(novaLista, null, 2)
    )

    return true
}

module.exports = {
    listar,
    salvar,
    atualizar,
    remover
}
