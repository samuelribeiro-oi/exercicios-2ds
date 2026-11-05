const express = require("express")
const router = express.Router()

const validarOrcamento = require("../middlewares/validarOrcamento")

let orcamentos = [
    { id: 1, cliente: "Ana", item: "Parafuso", valor: 2, status: "aprovado" },
    { id: 2, cliente: "Bruno", item: "Martelo", valor: 45, status: "enviado" },
    { id: 3, cliente: "Carla", item: "Furadeira", valor: 320, status: "enviado" }
]

router.get("/", (req, res) => {
    const { status, valorMin } = req.query

    let resultado = orcamentos

    if (status) {
        resultado = resultado.filter(orcamento => orcamento.status === status)
    }

    if (valorMin !== undefined) {
        resultado = resultado.filter(orcamento => orcamento.valor >= Number(valorMin))
    }

    res.status(200).json(resultado)
})

router.get("/:id", (req, res, next) => {
    const id = Number(req.params.id)

    const orcamento = orcamentos.find(orcamento => orcamento.id === id)

    if (!orcamento) {
        const erro = new Error("Orcamento nao encontrado")
        erro.status = 404
        return next(erro)
    }

    res.status(200).json(orcamento)
})

router.post("/", validarOrcamento, (req, res) => {
    const { cliente, item, valor } = req.body

    const novoOrcamento = {
        id: Math.max(0, ...orcamentos.map(o => o.id)) + 1,
        cliente,
        item,
        valor,
        status: "rascunho"
    }

    orcamentos.push(novoOrcamento)

    res.status(201).json({
        mensagem: "Registro de orcamento criado"
    })
})

module.exports = router