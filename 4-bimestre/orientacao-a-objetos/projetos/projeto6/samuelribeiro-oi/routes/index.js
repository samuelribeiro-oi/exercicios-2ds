
const express = require("express")
const router = express.Router()

const servicosRouter = require("./servicos")
const tutoresRouter = require("./tutores")

router.get("/", (req, res) => {
  res.status(200).json({ mensagem: "API de Petshop" })
});

router.use("/servicos", servicosRouter)
router.use("/tutores", tutoresRouter)

module.exports = router