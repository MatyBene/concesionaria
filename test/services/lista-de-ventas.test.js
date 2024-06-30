//const { mock } = require("node:test");
const concesionaria = require("../../src/services/main-services");
const mockAutos = require("../mocks/mockAutos");

describe("listaDeVentas", () => {
  beforeEach(() => {
    concesionaria.autos = mockAutos;
  });

  test("deberia devolver un array con los precios de los autos vendidos", () => {
    const result = concesionaria.listaDeVentas();
    expect(result).toEqual([
      mockAutos[2].precio,
      mockAutos[5].precio,
      mockAutos[7].precio,
      mockAutos[9].precio,
    ]);
  });

  test("deberia devolver un array vacio si no hay ningun auto vendido", () => {
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
    const result = concesionaria.listaDeVentas();
    expect(result).toEqual([]);
  });
});
