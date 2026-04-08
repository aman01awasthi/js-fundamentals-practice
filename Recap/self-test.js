// Closure — a counter factory that starts from any number you pass in. Must return a function. Call it twice with different starting numbers and log the results.

// here we will use closures as the outer function stops after return but inner function remember it's value and return that value wheever we call that function

function createCounter(n) {
  return function () {
    return n++;
  };
}
let counter = createCounter(10);
let count = createCounter(1);

console.log(counter());
console.log(counter());
console.log(counter());
console.log(count());
console.log(count());
console.log(count());

// Promise — create one that resolves after 1 second with the string "data loaded". Then consume it with .then() and log the result.

// here we will create apromise and inside promise we will have setTimeout for dealying to resolve the promise and then we will return string inside settimeout

let promise = new Promise((resolve) => {
  setTimeout(() => {
    return resolve("data loaded");
  }, 1000);
});

promise.then((resolve) => console.log(resolve));

// async/await — wrap that same promise in an async function. Use try/catch. Log the result. Call the function.
// fetch — fetch https://jsonplaceholder.typicode.com/todos/1. Log only the title property. Use async/await.
// DOM manipulation — create a div, set its textContent to "Hello from JS", give it a className of "note", append it to document.body.
