function countBits(n) {
    const ans = [0]; // Initialize the result array with 0 at index 0

    for (let i = 1; i <= n; i++) {
        // To count the number of set bits in a number, we can utilize the fact that
        // the number of set bits in a number x is equal to the number of set bits in x/2
        // plus 1 if x is odd, or equal to the number of set bits in x/2 if x is even
        ans[i] = ans[Math.floor(i / 2)] + (i % 2);
    }

    return ans;
}

module.exports = countBits;
