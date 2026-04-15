const { merge, mergeSort } = require("../merge");

let input, input1, input2;


describe("merge", () => {
    test("merge exists", () => {
        expect(merge).toBeDefined();
    });

    test("merge is a function", () => {
        expect(typeof(merge)).toBe('function');
    });

    test("merge returns something", () => {
        input1 = [1];
        input2 = [2];
        expect(merge(input1, input2)).toBeDefined();
    });

    test("merge returns an array of merged inputs", () => {
        input1 = [1];
        input2 = [2];
        expect(merge(input1, input2)).toEqual([1, 2]);
    });
});

describe("mergeSort", () => {
    test("mergeSort exists", () => {
        expect(mergeSort).toBeDefined();
    });

    test("mergeSort is a function", () => {
        expect(typeof(mergeSort)).toBe('function');
    });

    test("mergeSort returns something", () => {
        input = [1];
        expect(mergeSort(input)).toBeDefined();
    });

    test("mergeSort throws an error if input is not an array", () => {
        input = 0;
        expect(() => { mergeSort(input) }).toThrow();
        input = "a";
        expect(() => { mergeSort(input) }).toThrow();
        input = {};
        expect(() => { mergeSort(input) }).toThrow();
        input = null;
        expect(() => { mergeSort(input) }).toThrow();
        input = undefined;
        expect(() => { mergeSort(input) }).toThrow();
    });

    test("mergeSort throws an error if not every element of the input is a number", () => {
        input = [15, 4, "a", null]
        expect(() => { mergeSort(input) }).toThrow();
    });

    test("mergeSort returns an empty array if input is an empty array", () => {
        input = [];
        expect(mergeSort(input)).toEqual([]);
    });

    test("mergeSort returns the input array if it has length 1", () => {
        input = [73];
        expect(mergeSort(input)).toEqual([73]);
    })

    test("mergeSort returns a sorted array if input has length > 1", () => {
        input = [1, 2];
        expect(mergeSort(input)).toEqual([1, 2]);
        input = [2, 1];
        expect(mergeSort(input)).toEqual([1, 2]);
        input = [1, 2, 3, 4, 5];
        expect(mergeSort(input)).toEqual([1, 2, 3, 4, 5]);
        input = [3, 2, 1, 13, 8, 5, 0, 1];
        expect(mergeSort(input)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
        input = [105, 79, 100, 110];
        expect(mergeSort(input)).toEqual([79, 100, 105, 110]);
    });

});