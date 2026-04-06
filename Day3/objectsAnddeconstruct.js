// Task 1 — Create an object
// Create a user object with: name, age, city, and isEmployed. Log one property using dot notation and one using bracket notation.
let user = {
    name: 'Aman',
    age: 27,
    city: 'Mohali',
    isEmployed: true,
}
console.log(user.name);
console.log(user["isEmployed"]);

// Task 2 — Add & delete properties
// Add a skills property (array of 3 strings) to your user object. Then delete the city property. Log the final object.
user.skills= ["Html", "CSS", "JS"];
delete user.city;
console.log(user);

// Task 3 — Destructuring
// Destructure name, age, and skills from your user object in one line. Log all three.
let {name, age, skills} = user;
console.log(name, age, skills.join(' '));

// Task 4 — Function with destructuring
// Write a function introduceUser that takes a user object as a parameter and destructures inside the function. It should return a sentence like: "Hi, I'm Priya, 27, and I know HTML, CSS, JavaScript."
let introduceUser = (user) => {
    let {name, age, skills} = user;
    return "Hi I'm " + name + ' ' + age + ' and I know ' + skills.join(', ');
}

console.log(introduceUser(user));

// Task 5 — Nested object
// Create a company object with name, location, and an employee property that holds an object with name and role. Destructure the employee's name and role in one line using nested destructuring. Log both.
let company = {
    companyName: 'Awasthi IT Service & Consulting',
    companylocation: 'Mohali Phase 8',
    employee: {
        employeeName: 'Amandeep Awasthi',
        role: 'Director',
    }
}

let {employee:{employeeName, role}} = company;
console.log(employeeName, role);