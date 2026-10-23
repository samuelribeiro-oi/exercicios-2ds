
const express = require("express")
const app = express()

const routePrincipal = require("./routes/index")

app.use(express.json())

app.use("/api", routePrincipal)

app.use((req, res) => {
    res.status(404).json({
        mensagem: "Rota nao encontrada"
    });
});

module.exports = app
