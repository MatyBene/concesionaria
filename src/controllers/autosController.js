const autosService = require("../services/autosService");

const autosController = {
  listadoDeAutos: async (req, res) => {
    try {
      const listado = autosService.autosParaLaVenta();
      res.render("autos/listadoAutos", { listado });
    } catch {
      res.send("ERROR");
    }
  },
  detalleAuto: async (req, res) => {
    try {
      const patente = req.params.patente;
      const auto = autosService.buscarAuto(patente);
      res.render("autos/detalleAuto", { auto });
    } catch {
      res.send("ERROR");
    }
  },
};

module.exports = autosController;
