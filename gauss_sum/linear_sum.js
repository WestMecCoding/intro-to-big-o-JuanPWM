let sum = 0;
function linearSum(n) {
    let sum = 0
    for (let i = 1; i <= n; i++ ) {
        // sum = sum + i;
        sum += i;
    }
    return sum;
}
console.log(linearSum(100));