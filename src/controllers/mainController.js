const mainServices = require("../services/mainService");

const mainController = {
  inicio: (req, res) => {
    res.render("main/inicio");
  },
};

module.exports = mainController;

// module.exports = {
//   buscarAuto: (req, res) => {
//     const patente = req.params.patente;
//     const auto = mainServices.buscarAuto(patente);
//     res.json(auto);
//   },
//   autosParaLaVenta: (req, res) => {
//     const lista = mainServices.autosParaLaVenta();
//     res.json(lista);
//   },
//   listaDeVentas: (req, res) => {
//     const lista = mainServices.listaDeVentas();
//     res.json(lista);
//   },
// };
