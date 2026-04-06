// Write a function that takes an array of numbers and returns the sum using .reduce() // Example: sumAll([1, 2, 3, 4, 5]) → 15
let n = [1, 2, 3, 4, 5];
let warmUp = n.reduce((acc, crr) => {
    return acc + crr;
}, 0);
console.log(`Sum of array is, ${warmUp}`);