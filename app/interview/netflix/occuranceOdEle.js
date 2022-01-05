/*
 * Write a function that returns a map of the totaled occurrences of elements within an array.
 * let arr = ['a', 'b', 'c', 'a', 'd', 'c', 'a', 'b', 'd', 'a', 'b']
* */

let occurrence = (arr) => {
    let occ = {};
    for (let ele of arr) {
        if (occ[ele]) {
            occ[ele] = occ[ele] + 1;
        } else {
            occ[ele] = 1;
        }
    }

    return occ
}

let occurrence1 = (arr) => {
    if (!Array.isArray(arr)) throw new Error('Param as {arr} is required');
    return arr.reduce((acc, curr) => {
        if (acc.hasOwnProperty(curr)) acc[curr] += 1;
        else acc[curr] = 1;
        return acc;
    }, {});
}

let arr = ['a', 'b', 'c', 'a', 'd', 'c', 'a', 'b', 'd', 'a', 'b'];
console.log('Result ', occurrence1(arr))
