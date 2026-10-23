const express = require("express")
const app = require("..")
const router = express.Router()

const servicos = [
    { id: 1, nome: "Banho", tipo: "higiene", preco: 45, disponivel: true },
    { id: 2, nome: "Tosa", tipo: "higiene", preco: 60, disponivel: true },
    { id: 3, nome: "Consulta", tipo: "saude", preco: 120, disponivel: false }
]

router.get("/", (req, res) => {
    res.status(200).json(servicos)
})

router.get("/disponiveis", (req, res) => {
    res.status(200).json(servicos.filter(s => s.disponivel === true))
})

servicos.filter(s => s.disponivel === true)

router.get("/total", (req, res) => {
    res.status(200).json({ total: servicos.length})
})

router.post("/", (req, res) => {
    res.status(201).json({
        mensagem: "Cadastro de servico realizado"
    })
})

module.exports = router

