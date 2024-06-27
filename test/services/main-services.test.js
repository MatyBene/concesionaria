const { mock } = require("node:test");
const concesionaria = require("../../src/services/main-services");

describe("mainServices", () => {
  it("si le damos una patente deberia devolver el auto que posea esa patente", () => {
    //Arrange(ordenar mis datos)
    const mockAutos = [
      {
        marca: "Ford",
        modelo: "Fiesta",
        precio: 150000,
        km: 200,
        color: "Azul",
        cuotas: 12,
        anio: 2019,
        patente: "APL123",
        vendido: false,
      },
    ];

    concesionaria.autos = mockAutos;
    //Act(voy a actuar como si fuese mi funcion a testear)
    const result = concesionaria.buscarAuto(mockAutos[0].patente);
    //Assert(que quiero esperar, y lo compara con lo que llego)
    expect(result).toEqual(mockAutos[0]);
  });
  it("si le damos una patente que no existe deberia devolver null", () => {
    //Arrange(ordenar mis datos)
    const mockAutos = [
      {
        marca: "Ford",
        modelo: "Fiesta",
        precio: 150000,
        km: 200,
        color: "Azul",
        cuotas: 12,
        anio: 2019,
        patente: "APL123",
        vendido: false,
      },
    ];

    concesionaria.autos = mockAutos;
    //Act(voy a actuar como si fuese mi funcion a testear)
    const result = concesionaria.buscarAuto("ZZZ123");
    //Assert(que quiero esperar, y lo compara con lo que llego)
    expect(result).toEqual(null);
  });
  it("si le damos una patente en minusculas deberia devolver el auto que posea esa patente", () => {
    //Arrange(ordenar mis datos)
    const mockAutos = [
      {
        marca: "Ford",
        modelo: "Fiesta",
        precio: 150000,
        km: 200,
        color: "Azul",
        cuotas: 12,
        anio: 2019,
        patente: "APL123",
        vendido: false,
      },
    ];

    concesionaria.autos = mockAutos;
    //Act(voy a actuar como si fuese mi funcion a testear)
    const result = concesionaria.buscarAuto("apl123");
    //Assert(que quiero esperar, y lo compara con lo que llego)
    expect(result).toEqual(mockAutos[0]);
  });
  /* it("Si le damos una patente deberia devolver que el auto esta vendido", () => {
    //Arrange
    const mockAutos = [
      {
        patente: "APL123",
        vendido: false,
      },
    ];

    concesionaria.autos = mockAutos;
    //Act
    const result = concesionaria.venderAuto("APL123");
    //Assert
    expect(result).toEqual(mockAutos[0].vendido);
  }); */
  it("Deberia devolver la lista de autos que estan disponibles para la venta", () => {
    //Arrange
    const mockAutos = [
      {
        marca: "Ford",
        modelo: "Fiesta",
        precio: 150000,
        km: 200,
        color: "Azul",
        cuotas: 12,
        anio: 2019,
        patente: "APL123",
        vendido: false,
      },
      {
        marca: "Toyota",
        modelo: "Corolla",
        precio: 100000,
        km: 0,
        color: "Blanco",
        cuotas: 14,
        anio: 2019,
        patente: "JJK116",
        vendido: false,
      },
      {
        marca: "Toyota",
        modelo: "Corolla",
        precio: 100000,
        km: 0,
        color: "Blanco",
        cuotas: 14,
        anio: 2019,
        patente: "JJK116",
        vendido: true,
      },
    ];
    concesionaria.autos = mockAutos;

    const mockDisponibles = [
      {
        marca: "Ford",
        modelo: "Fiesta",
        precio: 150000,
        km: 200,
        color: "Azul",
        cuotas: 12,
        anio: 2019,
        patente: "APL123",
        vendido: false,
      },
      {
        marca: "Toyota",
        modelo: "Corolla",
        precio: 100000,
        km: 0,
        color: "Blanco",
        cuotas: 14,
        anio: 2019,
        patente: "JJK116",
        vendido: false,
      },
    ];
    //Act
    const result = concesionaria.autosParaLaVenta();
    //Assert
    expect(result).toEqual(mockDisponibles);
  });
});
