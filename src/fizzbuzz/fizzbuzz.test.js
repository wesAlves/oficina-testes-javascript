const { expect } = require("@jest/globals");
const fizzbuzz = require("./fizzbuzz");
const fizzbuss = require("./fizzbuzz");
describe("FizzBuss Puzzle", () => {
    test("Must return 0 zero when given 0", () => {
        const resultado = fizzbuzz(0);

        expect(resultado).toEqual(0);
    });

    test("Must return 7 zero when given 7", () => {
        const resultado = fizzbuzz(7);

        expect(resultado).toEqual(7);
    });

    test("Must return Fizz when is even divide by 3", () => {
        const resultado = fizzbuzz(3);

        expect(resultado).toEqual("Fizz");
    });

    test("Must return Buzz when is even divide by 5", () => {
        const resultado = fizzbuzz(5);

        expect(resultado).toEqual("Buzz");
    });

    test("Must return FizzBuzz when is even divide by 3 and 5", () => {
        const resultado = fizzbuzz(15);

        expect(resultado).toEqual("FizzBuzz");
    });
});
