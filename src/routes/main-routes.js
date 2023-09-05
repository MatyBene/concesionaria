const { Router } = require("express");

const mainControllers = require("../controllers/main-controllers");

const mainRouter = Router();

mainRouter.get("/:patente", mainControllers.buscarAuto);

module.exports = mainRouter;
