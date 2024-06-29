//const { mock } = require("node:test");
const concesionaria = require("../../src/services/main-services");
const mockAutos = require("../mocks/mockAutos");

describe("autosNuevos", () => {
  beforeEach(() => {
    concesionaria.autos = mockAutos;
  });

  test("deberia devolver los autos disponibles para la venta que tengan 100km o menos", () => {
    const result = concesionaria.autosNuevos();
    expect(result).toEqual([mockAutos[0], mockAutos[1]]);
  });

  test("deberia retornar un array vacio si ningun auto tiene 100km o menos", () => {
    concesionaria.autos = [
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
    const result = concesionaria.autosNuevos();
    expect(result).toEqual([]);
  });
});
