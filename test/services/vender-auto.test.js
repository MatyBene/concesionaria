//const { mock } = require("node:test");
const concesionaria = require("../../src/services/main-services");
const mockAutos = require("../mocks/mockAutos");

describe("venderAuto", () => {
  beforeEach(() => {
    concesionaria.autos = mockAutos;
  });

  test("deberia marcar como vendido un auto existente", () => {
    concesionaria.venderAuto("APL123");
    const result = concesionaria.buscarAuto("APL123");
    expect(result.vendido).toBe(true);
  });

  test("no deberia modificar el estado, de vendido, si el auto ya esta vendido", () => {
    concesionaria.venderAuto("JJK117");
    const result = concesionaria.buscarAuto("JJK117");
    expect(result.vendido).toBe(true);
  });

  test("no deberia hacer nada si la patente no existe", () => {
    concesionaria.venderAuto("ppp666");
    const result = concesionaria.buscarAuto("ppp666");
    expect(result).toBeNull();
  });
});
