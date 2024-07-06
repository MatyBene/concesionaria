//const { mock } = require("node:test");
const autosService = require("../../src/services/autosService");
const mockAutos = require("../mocks/mockAutos");

describe("venderAuto", () => {
  beforeEach(() => {
    autosService.autos = mockAutos;
  });

  test("deberia marcar como vendido un auto existente", () => {
    autosService.venderAuto("APL123");
    const result = autosService.buscarAuto("APL123");
    expect(result.vendido).toBe(true);
  });

  test("no deberia modificar el estado, de vendido, si el auto ya esta vendido", () => {
    autosService.venderAuto("JJK117");
    const result = autosService.buscarAuto("JJK117");
    expect(result.vendido).toBe(true);
  });

  test("no deberia hacer nada si la patente no existe", () => {
    autosService.venderAuto("ppp666");
    const result = autosService.buscarAuto("ppp666");
    expect(result).toBeNull();
  });
});
