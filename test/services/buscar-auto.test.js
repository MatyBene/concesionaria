//const { mock } = require("node:test");
const concesionaria = require("../../src/services/main-services");
const mockAutos = require("../mocks/mockAutos");

describe("buscarAuto", () => {
  beforeEach(() => {
    concesionaria.autos = mockAutos;
  });

  test("debería llamar a la función buscarAuto y devolver el auto correcto", () => {
    const result = concesionaria.buscarAuto("APL123");
    expect(result).toEqual(mockAutos[0]);
  });

  test("debería devolver null si no encuentra el auto", () => {
    const result = concesionaria.buscarAuto("ZZZ123");
    expect(result).toBeNull();
  });

  test("si le damos una patente en minúsculas debería devolver el auto que posea esa patente", () => {
    const result = concesionaria.buscarAuto("apl123");
    expect(result).toEqual(mockAutos[0]);
  });
});
