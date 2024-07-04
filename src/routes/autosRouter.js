const { Router } = require("express");
const router = Router();

const autosController = require("../controllers/autosController");

router.get("/", autosController.listadoDeAutos);

router.get("/:patente", autosController.detalleAuto);

module.exports = router;
