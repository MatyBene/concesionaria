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
});
