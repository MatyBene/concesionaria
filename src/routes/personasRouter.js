const { Router } = require("express");
const router = Router();

const personasController = require("../controllers/personasController");

router.get("/", personasController);

router.get("/:id", personasController);

module.exports = router;
