//const { mock } = require("node:test");
const autosService = require("../../src/services/autosService");
const mockAutos = require("../mocks/mockAutos");

describe("totalDeVentas", () => {
  beforeEach(() => {
    autosService.autos = mockAutos;
  });

  test("deberia devolver la suma de todos los precios de los autos vendidos", () => {
    const result = autosService.totalDeVentas();
    expect(result).toEqual(520000);
  });

  test("deberia devolver cero si no hay ningun auto vendido", () => {
    autosService.autos = [
      {
        marca: "Ford",
        modelo: "Fiesta",
        precio: 150000,
        km: 100,
        color: "Azul",
        cuotas: 12,
        anio: 2019,
        patente: "APL123",
        vendido: false,
      },
    ];
    const result = autosService.totalDeVentas();
    expect(result).toEqual(0);
  });
});
