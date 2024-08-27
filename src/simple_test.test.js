// use the functions from sample.js
const { addFunc, isDivisibleBy5, isOddOrEven } = require('./sample');

// create the test suite
describe("Test Suite for sample.js functions", () => {
    // create the test cases
    it("Test addFunc function, should add 3 numbers", () => {
        // test case 1
        expect(addFunc(1, 2, 3)).toBe(6);
        // test case 2
        expect(addFunc(4, 5, 6)).toBe(15);
    });

    it("Test isDivisibleBy5 function", () => {
        // test case 1
        expect(isDivisibleBy5(10)).toBe(true);
        // test case 2
        expect(isDivisibleBy5(7)).toBe(false);
    });

    // Test driven development
    // Step 1: write the test
    it("should check if odd or even", () => {
        // test case 1
        expect(isOddOrEven(2)).toBe("even");
        // test case 2
        expect(isOddOrEven(3)).toBe("odd");
    });
});