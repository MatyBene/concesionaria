//const { mock } = require("node:test");
const concesionaria = require("../../src/services/main-services");
const mockAutos = require("../mocks/mockAutos");
const mockPersonas = require("../mocks/mockPersonas");

describe("puedeComprar", () => {
  beforeEach(() => {
    concesionaria.autos = mockAutos;
    concesionaria.personas = mockPersonas;
  });

  test("deberia devolver verdadero si puede pagar la cuota y puede pagar el monto total", () => {
    const auto = concesionaria.buscarAuto("JJK116");
    const result = concesionaria.puedeComprar(auto, concesionaria.personas[0]);
    expect(result).toEqual(true);
  });

  test("deberia devolver falso si puede pagar la cuota pero no puede pagar el monto total", () => {
    const auto = concesionaria.buscarAuto("APL123");
    const result = concesionaria.puedeComprar(auto, concesionaria.personas[0]);
    expect(result).toEqual(false);
  });

  test("deberia devolver falso si no puede pagar la cuota pero si puede pagar el monto total", () => {
    const auto = concesionaria.buscarAuto("EFG345");
    const result = concesionaria.puedeComprar(auto, concesionaria.personas[5]);
    expect(result).toEqual(false);
  });

  test("deberia devolver falso si no puede pagar la cuota y no puede pagar el monto total", () => {
    const auto = concesionaria.buscarAuto("EFG345");
    const result = concesionaria.puedeComprar(auto, concesionaria.personas[0]);
    expect(result).toEqual(false);
  });
});
