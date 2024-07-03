//const { mock } = require("node:test");
const concesionaria = require("../../src/services/main-services");
const mockAutos = require("../mocks/mockAutos");
const mockPersonas = require("../mocks/mockPersonas");

describe("autosQueOuedeComprar", () => {
  beforeEach(() => {
    concesionaria.autos = mockAutos;
    concesionaria.personas = mockPersonas;
  });

  test("deberia devolver un array con los autos que la persona puede comprar", () => {
    const result = concesionaria.autosQuePuedeComprar(
      concesionaria.personas[0]
    );
    expect(result).toEqual();
  });
});
