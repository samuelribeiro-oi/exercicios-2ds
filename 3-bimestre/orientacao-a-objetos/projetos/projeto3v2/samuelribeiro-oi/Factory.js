const Fatura = require("./Fatura")

class Factory {
    static criar(tipo, cliente) {
        switch (tipo) {
            case "prePago":
                return new Fatura.PrePago(cliente)

            case "posPago":
                return new Fatura.PosPago(cliente)

            case "controle":
                return new Fatura.Controle(cliente)

            default:
                throw new Error("Tipo de fatura inválido")
        }
    }
}

module.exports = Factory