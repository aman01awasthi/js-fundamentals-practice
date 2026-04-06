// Task 1 — async/await version
// Rewrite the food order using async/await // No .then() chains — use await instead
// Hint: create a helper function called wait(ms)
// that returns a Promise with setTimeout // then use await wait(1000) between steps
async function order (ms){
    console.log("Order placed");
    await wait(ms);
    console.log("Food being prepared");
    await wait(ms);
    console.log("Food delivered");
    await wait(ms);
    console.log("Enjoy your meal!")

}

function wait(ms){
    let promise = new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
    return promise;
}
order(1000);
// Task 2 — function returning a Promise
// Write a function checkAge(age) that:
// - returns a Promise
// - resolves with "Access granted" if age >= 18
// - rejects with "Access denied" if age < 18
// Handle both cases with .then() and .catch()

function checkAge (age){
    let promise = new Promise((resolve, reject) => {
        if (18 <= age){
            resolve("Access granted");
        } else if(18 > age){
            reject("Access denied");
        }
    });
    return promise;
}
checkAge(15)
    .then(msg => console.log(`${msg} Eligible`))
    .catch(err => console.log(`${err} Not Eligible`))

// Task 3 — Promise.all()
// Create 3 Promises that resolve after
// different times (500ms, 1000ms, 1500ms)
// Each logs its own message when done
// Use Promise.all() to run all 3 simultaneously
// Log "All done!" when all three finish

let first = new Promise((resolve) => {
    setTimeout(() => {
        console.log("I am First And I am Done!!");
        return resolve();
    }, 500);
})

let second = new Promise((resolve) => {
    setTimeout(() => {
        console.log("I am Second And I am Done!!");
        return resolve();
    }, 1000);
})

let third = new Promise((resolve) => {
    setTimeout(() => {
        console.log("I am Third And I am Done!!");
        return resolve();
    }, 1500);
})

Promise.all([first, second, third])
.then(()=> {console.log("All done")});