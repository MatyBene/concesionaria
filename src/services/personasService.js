let autosImportados = require("../data/autos");
let personasImportadas = require("../data/personas");
const autosService = require("./autosService");

module.exports = {
  autos: autosImportados,
  personas: personasImportadas,
  puedeComprar: function (auto, persona) {
    return (
      auto.precio / auto.cuotas <= persona.capacidadDePagoEnCuotas &&
      auto.precio <= persona.capacidadDePagoTotal
    );
  },
  autosQuePuedeComprar: function (persona) {
    let autosDisponibles = autosService.autosParaLaVenta();
    let autosParaComparar = autosDisponibles.filter((auto) =>
      this.puedeComprar(auto, persona)
    );
    return autosParaComparar;
  },
};
