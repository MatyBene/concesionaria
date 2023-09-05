let autosImportados = require("../data/autos");

module.exports = {
  autos: autosImportados,
  buscarAuto: function (patente) {
    let auto = this.autos.find((auto) => auto.patente === patente);
    return auto != undefined ? auto : null;
  },
  venderAuto: function (patente) {
    let auto = this.buscarAuto(patente);
    if (auto) {
      auto.vendido = true;
    }
  },
  autosParaLaVenta: function () {
    let listaAutos = this.autos.filter((auto) => !auto.vendido);
    return listaAutos;
  },
  autosNuevos: function () {
    let listaAutos = this.autosParaLaVenta();
    let autosNuevos = listaAutos.filter((auto) => auto.km <= 100);
    return autosNuevos;
  },
  listaDeVentas: function () {
    let autosVendidos = this.autos.filter((auto) => auto.vendido);
    let lista = autosVendidos.map((autoVendido) => autoVendido.precio);
    return lista;
  },
  totalDeVentas: function () {
    let montoTotal = this.listaDeVentas().reduce(
      (total, monto) => total + monto,
      0
    );
    return montoTotal;
  },
  puedeComprar: function (auto, persona) {
    return (
      auto.precio / auto.cuotas < persona.capacidadDePagoEnCuotas &&
      auto.precio < persona.capacidadDePagoTotal
    );
  },
  autosQuePuedeComprar: function (persona) {
    let autosDisponibles = this.autosParaLaVenta();
    let autosParaComparar = autosDisponibles.filter((auto) =>
      this.puedeComprar(auto, persona)
    );
    return autosParaComparar;
  },
};
