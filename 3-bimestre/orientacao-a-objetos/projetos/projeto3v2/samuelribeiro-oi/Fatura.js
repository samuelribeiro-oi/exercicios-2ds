class Fatura {
    constructor(cliente) {
        this.cliente = cliente
    }

    emitir() {
        throw new Error("Método emitir() deve ser implementado")
    }
}

class PrePago extends Fatura {
    emitir() {
        return `Fatura de plano pré-pago emitida para: ${this.cliente}`
    }
}

class PosPago extends Fatura {
    emitir() {
        return `Fatura de plano pós-pago emitida para: ${this.cliente}`
    }
}

class Controle extends Fatura {
    emitir() {
        return `Fatura de plano controle emitida para: ${this.cliente}`
    }
}

module.exports = Fatura

module.exports.PrePago = PrePago
module.exports.PosPago = PosPago
module.exports.Controle = Controle