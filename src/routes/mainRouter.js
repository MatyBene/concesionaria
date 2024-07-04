const { Router } = require("express");
const router = Router();

const mainController = require("../controllers/mainController");

router.get("/", mainController.paginaInicio);

const autosRouter = require("./autosRouter");
router.use("/autos", autosRouter);

const personasRouter = require("./personasRouter");
router.use("/personas", personasRouter);

module.exports = router;
