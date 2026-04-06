let num = [1, 2, 3, 4, 5];
// let reducer = num.filter((n) => n ).reduce((n, num) => n + n);
// console.log(reducer);

let result = num.reduce((acc, crr) => {
    return acc + crr;
}, 0);
console.log(result);


// Write a function that returns the larger of two numbers.
let largeNum = (a,b) => a > b ? a : b;
console.log(largeNum(81, 889));