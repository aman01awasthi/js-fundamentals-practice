// Task 1 — Counter using closure
// Write a function makeCounter that:
// - starts count at 0 // - returns a function that increments 
//   count by 1 each time it's called //   and returns the new count
// Expected:
// let counter = makeCounter();
// console.log(counter()); // 1 // console.log(counter()); // 2 // console.log(counter()); // 3

function makeCounter(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());

// Task 2 — Multiplier factory
// Write a function multiplier that:
// - takes a number as argument // - returns a new function that multiplies //   any input by that number
// Expected:
// let double = multiplier(2); // let triple = multiplier(3);
// console.log(double(5));  // 10 // console.log(triple(5));  // 15

function multiplier(num){
    return function(n){
        return num * n;
    }
}
let double = multiplier(2);
let triple = multiplier(3);
console.log(double(5));
console.log(triple(5));

// Task 3 — myMap from scratch
// Write your own version of .map() called myMap
// It takes an array and a function as arguments // It returns a new array with the function  // applied to every item
// Expected:
// myMap([1,2,3], n => n * 2)  // [2, 4, 6] // myMap([1,2,3], n => n + 10) // [11, 12, 13] // No built-in .map() allowed
function myMap(arr, fn){
    let result = [];
    for (let i = 0; i <arr.length; i++){
        result.push(fn(arr[i]));
    }
    return result;
}

console.log(myMap([1,2,3], n => n * 2));
console.log(myMap([1,2,3], n => n + 10));