// Rewrite your callback hell food order using Promises
// Same steps, same timing:
// Step 1: "Order placed" — immediately // Step 2: "Food being prepared" — after 1 second
// Step 3: "Food delivered" — after 2 more seconds// Step 4: "Enjoy your meal!" — after 1 more second
//
// Use .then() chaining — no nested callbacks // Each .then() should return a new Promise // wrapping a setTimeout

const myPromise = new Promise((resolve) => {
  console.log("Order Placed");
  resolve();
});

myPromise
    .then(() => {
        return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Food Being Prepared");
            resolve();
        }, 1000);
        });
    })
    .then(() => {
        return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Food delivered");
            resolve();
        }, 2000);
        });
    })
    .then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("Enjoy your meal!");
                resolve();
            }, 1000);
        })
    })