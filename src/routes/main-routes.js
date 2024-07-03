const { Router } = require("express");
const router = Router();

const mainController = require("../controllers/main-controllers");

router.get("/", mainController.paginaInicio);

const autosRouter = require("./autos-routes");
router.use("/autos", autosRouter);

const personasRouter = require("./personas-routes");
router.use("/personas", personasRouter);

module.exports = router;
