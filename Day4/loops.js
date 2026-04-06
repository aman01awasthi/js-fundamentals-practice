// Task 1 — FizzBuzz // Timer: 5 minutes max // For numbers 1-30:
// divisible by 3 → print "Fizz" // divisible by 5 → print "Buzz"  
// divisible by both → print "FizzBuzz" // otherwise → print the number
let n = 30;
for(let i = 1; i <= n; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
    } else if(i % 3 === 0){
        console.log('Fizz');
    }else if(i % 5 === 0){
        console.log('Buzz');
    }else{
        console.log(i);
    }
}


// Task 2 — Student scores
// Given this array:
let students = [
    { name: 'Aman', score: 82 },
    { name: 'Rahul', score: 55 },
    { name: 'Priya', score: 91 },
    { name: 'Karan', score: 48 },
    { name: 'Neha', score: 73 },
];

// Print only students who passed (score above 60)
// Use template literals: "Aman passed with 82"
for(let i = 0; i < students.length; i++){
        if(students[i].score > 60){
            console.log(`${students[i].name} passed with ${students[i].score}`)
        }
}

// Task 3 — Multiplication table
// Print a 5x5 multiplication table using nested loops // Output should look like:
// 1x1=1  1x2=2  1x3=3 ... // 2x1=2  2x2=4 ...
for (let i = 1; i <= 5; i++){
    let res;
    for (let j = 1; j <= 5; j++){
        res = i * j;
        console.log(`${j} * ${i} = ${res}`);
    }
}

// Task 4 — Guessing game (console simulation)
// Hardcode a secret number (e.g. 7) // Write a while loop that guesses numbers 1-10
// When it finds the match, print // "Found it! The number is 7" and stop the loop
let num = 7;
let i = 1;
while (i <= 10) {
    if(i === num){
        console.log(`Found it! The number is ${num}`);
        break;
    }
    i++;
}