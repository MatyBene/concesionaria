//const { mock } = require("node:test");
const autosService = require("../../src/services/autosService");
const personasService = require("../../src/services/personasService");
const mockAutos = require("../mocks/mockAutos");
const mockPersonas = require("../mocks/mockPersonas");

describe("autosQueOuedeComprar", () => {
  beforeEach(() => {
    autosService.autos = mockAutos;
    personasService.personas = mockPersonas;
  });

  test("deberia devolver un array con los autos que la persona puede comprar", () => {
    const result = personasService.autosQuePuedeComprar(
      personasService.personas[0]
    );
    expect(result).toEqual([mockAutos[1]]);
  });

  test("deberia devolver un array vacio cuando una persona no puede comprar ningun auto", () => {
    const result = personasService.autosQuePuedeComprar(
      personasService.personas[1]
    );
    expect(result).toEqual([]);
  });
});
