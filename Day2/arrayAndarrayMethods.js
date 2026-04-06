// Create an array of 5 friends' names. Write code to: add one, remove one, find one, sort them. From memory

let brothers = ['Harsh', 'Aman', 'Nayan', 'Tanishq', 'Kanishq'];
brothers.unshift('Vinay');
console.log(brothers);

brothers.shift();
console.log(brothers);

brothers.pop();
console.log(brothers);

brothers.push('Kanishq');
console.log(brothers);

let findBrother = brothers.find(function(name){
    return name === 'Nayan';
});
console.log(findBrother);

brothers.sort();
console.log(brothers);


// Write a function that takes two numbers // and returns the larger one. // No Math.max() allowed.
function largeNum(a,b){
    if(a > b){
        return a;
    } else {
        return b;
    }
}
console.log( largeNum(9,5));


// largeNum with ternary Operator for practice
let bigNumber = (a, b) => {
    return a > b ? a : b;
}
console.log(bigNumber(2, 89));


// 1. Return only even numbers
const nums = [3, 7, 2, 14, 9, 4, 22, 11, 6, 18];
let result = nums.filter(function (num){
        return num % 2 === 0;
});

console.log(result);


// 2. Return only numbers above 10
let greater = nums.filter((num)=> num > 10);
console.log(greater);

// 3. Return every number doubled
let doubleVal = nums.map((num) => num * 2);
console.log(doubleVal);

// 4. Return only even numbers above 5, doubled
let greaterNum = nums.filter((num)=> num > 5 && num % 2 === 0).map((num) => num * 2);
console.log(greaterNum);


const numss = [3, 7, 2, 14, 9, 4, 22, 11, 6, 18];
let reduction = numss.filter((n)=> n % 2 === 0).map((n) => n).reduce((n, num) => n + num);
console.log('reduce' +  ':' + reduction);