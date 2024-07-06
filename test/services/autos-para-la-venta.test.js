//const { mock } = require("node:test");
const autosService = require("../../src/services/autosService");
const mockAutos = require("../mocks/mockAutos");

describe("autosParaLaVenta", () => {
  beforeEach(() => {
    autosService.autos = mockAutos;
  });

  test("deberia retornar todos los autos que estan disponibles para la venta (auto.vendido = false)", () => {
    const result = autosService.autosParaLaVenta();
    expect(result).toEqual([
      mockAutos[0],
      mockAutos[1],
      mockAutos[3],
      mockAutos[4],
      mockAutos[6],
      mockAutos[8],
    ]);
  });

  test("deberia retornar un array vacio si no hay ningun auto disponible para la venta", () => {
    autosService.autos = [
      {
        marca: "Ford",
        modelo: "Fiesta",
        precio: 150000,
        km: 200,
        color: "Azul",
        cuotas: 12,
        anio: 2019,
        patente: "APL123",
        vendido: true,
      },
    ];
    const result = autosService.autosParaLaVenta();
    expect(result).toEqual([]);
  });
});
