//const { mock } = require("node:test");
const concesionaria = require("../../src/services/main-services");
const mockAutos = require("../mocks/mockAutos");

describe("autosNuevos", () => {
  beforeEach(() => {
    concesionaria.autos = mockAutos;
  });

  test("", () => {});
});
