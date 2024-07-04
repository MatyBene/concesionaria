const mainService = require("../services/mainService");

const autosController = {
  listadoDeAutos: async (req, res) => {
    try {
      const listado = mainService.autosParaLaVenta();
      res.render("autos/listadoAutos", { listado });
    } catch {
      res.send("ERROR");
    }
  },
  detalleAuto: async (req, res) => {
    try {
      const patente = req.params.patente;
      const auto = mainService.buscarAuto(patente);
      res.render("autos/detalleAuto", { auto });
    } catch {
      res.send("ERROR");
    }
  },
};

module.exports = autosController;
