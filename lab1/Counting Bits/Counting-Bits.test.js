const countBits = require("./Counting-Bits");

test("countBits for n = 2", () => {
    expect(countBits(2)).toEqual([0, 1, 1]);
});

test("countBits for n = 5", () => {
    expect(countBits(5)).toEqual([0, 1, 1, 2, 1, 2]);
});



