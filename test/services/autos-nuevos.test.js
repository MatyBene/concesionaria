//const { mock } = require("node:test");
const autosService = require("../../src/services/autosService");
const mockAutos = require("../mocks/mockAutos");

describe("autosNuevos", () => {
  beforeEach(() => {
    autosService.autos = mockAutos;
  });

  test("deberia devolver los autos disponibles para la venta que tengan 100km o menos", () => {
    const result = autosService.autosNuevos();
    expect(result).toEqual([mockAutos[0], mockAutos[1]]);
  });

  test("deberia retornar un array vacio si ningun auto tiene 100km o menos", () => {
    autosService.autos = [
      {
        marca: "Toyota",
        modelo: "Corolla",
        precio: 100000,
        km: 0,
        color: "Blanco",
        cuotas: 14,
        anio: 2019,
        patente: "JJK117",
        vendido: true,
      },
    ];
    const result = autosService.autosNuevos();
    expect(result).toEqual([]);
  });
});
