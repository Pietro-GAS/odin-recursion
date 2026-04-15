function fib(num) {
    if(!Number.isInteger(num) || num <= 0) {
        throw new Error("The input must be an integer. The minimum value is 1.")
    }
    let arr = [0, 1]
    if (num === 1) {
        return [arr[0]]
    } else {
        for (let i = 2; i < num; i++) {
            arr.push(arr[i - 1] + arr[i - 2]);
        }
        return arr
    }
};

module.exports = fib;