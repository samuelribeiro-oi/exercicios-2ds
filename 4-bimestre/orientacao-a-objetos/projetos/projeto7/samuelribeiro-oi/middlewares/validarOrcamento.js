function validarOrcamento(req, res, next) {
    const { cliente, item, valor } = req.body

    if (!cliente) {
        const erro = new Error("O campo cliente e obrigatorio")
        erro.status = 400
        return next(erro)
    }

    if (!item) {
        const erro = new Error("O campo item e obrigatorio")
        erro.status = 400
        return next(erro)
    }

    if (typeof valor !== "number" || Number.isNaN(valor)) {
        const erro = new Error("O campo valor deve ser um numero")
        erro.status = 400
        return next(erro)
    }

    if (valor <= 0) {
        const erro = new Error("O campo valor deve ser maior que zero")
        erro.status = 400
        return next(erro)
    }

    next()
}

module.exports = validarOrcamento