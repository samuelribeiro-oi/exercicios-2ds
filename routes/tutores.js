const express = require("express")
const router = express.Router()

const tutores = [
    { id: 1, nome: "Ana", contato: "9999-1111" },
    { id: 2, nome: "Bruno", contato: "9999-2222" }
]

router.get("/" , (req, res) => {
    res.status(200).json(tutores)
})

router.get("/total", (req, res) =>  {
    res.status(200).json({ total: tutores.length})
})

module.exports = router