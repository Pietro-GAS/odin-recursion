const fib = require("../fib");

describe("iterative", () => {
    test("fib exists", () => {
        expect(fib).toBeDefined();
    });
    test("fib is a function", () => {
        expect(typeof(fib)).toBe('function');
    });
    test("fib returns something", () => {
        let input = 2;
        expect(fib(input)).toBeDefined();
    });
    test("fib throws an error if input is not an integer greater than 0", () => {
        let input = {}
        expect(() => { fib(input) }).toThrow();
        input = -1;
        expect(() => { fib(input) }).toThrow();
        input = "a";
        expect(() => { fib(input) }).toThrow();
        input = [1, 2, 3];
        expect(() => { fib(input) }).toThrow();
    });
    test("fib returns an array containing the first n numbers of the Fibonacci sequence", () => {
        let input = 1;
        expect(fib(input)).toEqual([0]);
        input = 2;
        expect(fib(input)).toEqual([0, 1]);
        input = 3;
        expect(fib(input)).toEqual([0, 1, 1]);
        input = 5;
        expect(fib(input)).toEqual([0, 1, 1, 2, 3]);
        input = 8;
        expect(fib(input)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
        input = 20;
        expect(fib(input)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]);
    })
});