function mergeSort(arr) {
    if (!isValid(arr)) {
        throw new Error("The input must be an array of numbers.")
    }

    if (arr.length <= 1) {
        return arr
    } else {
        let halfPoint = Math.floor(arr.length / 2);
        let left = mergeSort(arr.slice(0, halfPoint));
        let right = mergeSort(arr.slice(halfPoint));
        return merge(left, right);
    }
}

function merge(left, right) {
    let i =0, j = 0;
    let output = [];
    while(i < left.length && j < right.length) {
        if(left[i] <= right[j]) {
            output.push(left[i]);
            i++;
        } else {
            output.push(right[j]);
            j++;
        }
    }
    return output.concat(left.slice(i)).concat(right.slice(j));
}

function isValid(input) {
    return Array.isArray(input) && allNum(input);
}

function allNum(input) {
    return input.every(e => {
        return typeof(e) === 'number'
    })
}

module.exports = { merge, mergeSort };