//const { mock } = require("node:test");
const concesionaria = require("../../src/services/main-services");
const mockAutos = require("../mocks/mockAutos");

describe("autosParaLaVenta", () => {
  beforeEach(() => {
    concesionaria.autos = mockAutos;
  });

  test("deberia retornar todos los autos que estan disponibles para la venta (auto.vendido = false)", () => {
    const result = concesionaria.autosParaLaVenta();
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
    concesionaria.autos = [
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
    const result = concesionaria.autosParaLaVenta();
    expect(result).toEqual([]);
  });
});
