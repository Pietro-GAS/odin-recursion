function fib(num) {
    if(!isValid(num)) {
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

function fibRec(num) {
    if (!isValid(num)) {
        throw new Error("The input must be an integer. The minimum value is 1.")
    }

    let arr = [0, 1]
    let out;

    if (num <= 2) {
        out = arr.filter(x => arr.indexOf(x) < num)
    } else {
        let prev = fib(num - 1);
        prev.push(prev[num - 2] + prev[num - 3]);
        out = prev;
    }
    return out
}

function isValid(input) {
    return Number.isInteger(input) && input > 0
}

module.exports = { fib, fibRec };