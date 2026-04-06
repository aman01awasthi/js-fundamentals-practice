// Given this array:
let students = [
    { name: 'Aman', score: 82 },
    { name: 'Rahul', score: 55 },
    { name: 'Priya', score: 91 },
    { name: 'Karan', score: 48 },
    { name: 'Neha', score: 73 },
];

// Return the average score using .reduce() // Expected output: 69.8
let sum = students.reduce((acc, crr) => acc + crr.score, 0);
let avg = sum / students.length;
console.log(avg);