//const { mock } = require("node:test");
const autosService = require("../../src/services/autosService");
const personasService = require("../../src/services/personasService");
const mockAutos = require("../mocks/mockAutos");
const mockPersonas = require("../mocks/mockPersonas");

describe("puedeComprar", () => {
  beforeEach(() => {
    autosService.autos = mockAutos;
    personasService.personas = mockPersonas;
  });

  test("deberia devolver verdadero si puede pagar la cuota y puede pagar el monto total", () => {
    const auto = autosService.buscarAuto("JJK116");
    const result = personasService.puedeComprar(
      auto,
      personasService.personas[0]
    );
    expect(result).toEqual(true);
  });

  test("deberia devolver falso si puede pagar la cuota pero no puede pagar el monto total", () => {
    const auto = autosService.buscarAuto("APL123");
    const result = personasService.puedeComprar(
      auto,
      personasService.personas[0]
    );
    expect(result).toEqual(false);
  });

  test("deberia devolver falso si no puede pagar la cuota pero si puede pagar el monto total", () => {
    const auto = autosService.buscarAuto("EFG345");
    const result = personasService.puedeComprar(
      auto,
      personasService.personas[5]
    );
    expect(result).toEqual(false);
  });

  test("deberia devolver falso si no puede pagar la cuota y no puede pagar el monto total", () => {
    const auto = autosService.buscarAuto("EFG345");
    const result = personasService.puedeComprar(
      auto,
      personasService.personas[0]
    );
    expect(result).toEqual(false);
  });
});
