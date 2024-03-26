// isStrictlyPalindromic.test.js
const isStrictlyPalindromic = require("./Strictly-Palindromic-Number");

test("9 is not strictly palindromic", () => {
    expect(isStrictlyPalindromic(9)).toBe(false);
});

test("4 is not strictly palindromic", () => {
    expect(isStrictlyPalindromic(4)).toBe(false);
});

