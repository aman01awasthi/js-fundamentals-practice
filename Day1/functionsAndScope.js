// Write 5 functions from scratch: greet, add, multiply, isEven, factorial.

// function 1 Greet
function greet(greeting, from){
    return greeting + ' ' + from;
}
console.log(greet ('Hello Core Js', 'Aman this Side'));

// function 2 add
function add(a, b){
    return a + b;
}
console.log(add(5,9));

//function 3 multiply
function multiply(a, b){
    return a * b;
}
console.log(multiply (5,9));

// function 4 isEven
function isEven(num){
    return num % 2 === 0;
}
console.log(isEven(11));

// function 5 factorial
function factorial(a){
    let res = 1;
    for(let i = a; i >= 1; i--){
       res = res * i;
    }
    return res;
}
console.log(factorial(5));