const { palindrome } = require("../../utils/for-testing");

describe("palindrome", () => {
  test("of midudev", () => {
    const result = palindrome("midudev");

    expect(result).toBe("vedudim");
  });

  //test unitario
  test("of empty string", () => {
    const result = palindrome("");
    expect(result).toBe("");
  });

  /* test("palindrome of undefined", () => {
    const result = palindrome(); 
    expect(result).toBe("");
  }); */
  // Aca encontramos el cornet case de nuestro palindromo
  // Para estos casos se elige si modificar la funcion o no

  test("of undefined", () => {
    const result = palindrome();
    expect(result).toBeUndefined();
  });
});
