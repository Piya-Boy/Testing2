// evaluate.test.js
const evaluate = require("./Eval");

test("Evaluate '2 + 3 - 1'", () => {
    expect(evaluate("2 + 3 - 1")).toBe(4);
});


