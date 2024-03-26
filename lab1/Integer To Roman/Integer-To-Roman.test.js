
const intToRoman = require("./Integer-To-Roman.js");

test("Convert 3 to Roman numeral", () => {
    expect(intToRoman(3)).toBe("III");
});

test("Convert 58 to Roman numeral", () => {
    expect(intToRoman(58)).toBe("LVIII");
});

test("Convert 1994 to Roman numeral", () => {
    expect(intToRoman(1994)).toBe("MCMXCIV");
});

