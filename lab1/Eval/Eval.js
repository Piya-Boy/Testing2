function evaluate(str) {
    const tokens = str.split(" ");
    let result = 0;
    let currentOperator = "+";

    for (let token of tokens) {
        if (token === "+" || token === "-") {
            currentOperator = token;
        } else {
            const number = parseInt(token);
            if (currentOperator === "+") {
                result += number;
            } else if (currentOperator === "-") {
                result -= number;
            }
        }
    }

    return result;
}

module.exports = evaluate;
