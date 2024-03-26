function countBits(n) {
    const ans = new Array(n + 1).fill(0); // Initialize the result array with 0s

    for (let i = 1; i <= n; i++) {
        ans[i] = ans[i >> 1] + (i & 1); // Compute number of set bits using bit manipulation
    }

    return ans;
}

module.exports = countBits;
