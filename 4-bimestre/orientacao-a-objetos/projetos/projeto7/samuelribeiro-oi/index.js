const express = require("express")
const app = express()

const orcamentosRouter = require("./routes/orcamentos")

app.use(express.json())

app.use("/orcamentos", orcamentosRouter)

app.use((req, res, next) => {
    res.status(404).json({
        erro: "Rota nao encontrada"
    })
})

app.use((erro, req, res, next) => {
    res.status(erro.status || 500).json({
        erro: erro.message
    })
})

module.exports = app