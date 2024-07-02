//const { mock } = require("node:test");
const concesionaria = require("../../src/services/main-services");
const mockAutos = require("../mocks/mockAutos");

describe("totalDeVentas", () => {
  beforeEach(() => {
    concesionaria.autos = mockAutos;
  });

  test("deberia devolver la suma de todos los precios de los autos vendidos", () => {
    const result = concesionaria.totalDeVentas();
    expect(result).toEqual(520000);
  });

  test("deberia devolver cero si no hay ningun auto vendido", () => {
    concesionaria.autos = [
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
    const result = concesionaria.totalDeVentas();
    expect(result).toEqual(0);
  });
});
