function isPalindromic(str) {
    return str === str.split("").reverse().join("");
}

function isStrictlyPalindromic(n) {
    if (n <= 1) return false;

    for (let base = 2; base <= n - 2; base++) {
        const numStr = n.toString(base);
        if (!isPalindromic(numStr)) {
            return false;
        }
    }

    return true;
}

module.exports = isStrictlyPalindromic;
