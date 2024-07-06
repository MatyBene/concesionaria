//const { mock } = require("node:test");
const autosService = require("../../src/services/autosService");
const mockAutos = require("../mocks/mockAutos");

describe("buscarAuto", () => {
  beforeEach(() => {
    autosService.autos = mockAutos;
  });

  test("debería llamar a la función buscarAuto y devolver el auto correcto", () => {
    const result = autosService.buscarAuto("APL123");
    expect(result).toEqual(mockAutos[0]);
  });

  test("debería devolver null si no encuentra el auto", () => {
    const result = autosService.buscarAuto("ZZZ123");
    expect(result).toBeNull();
  });

  test("si le damos una patente en minúsculas debería devolver el auto que posea esa patente", () => {
    const result = autosService.buscarAuto("apl123");
    expect(result).toEqual(mockAutos[0]);
  });
});
