// Task 1 — setTimeout callback
// Write a function that:
// - logs "Starting..." immediately
// - waits 2 seconds
// - then logs "Done waiting!"
// No libraries. Just setTimeout.

function firstTask(){
    console.log("Starting...");
    setTimeout(()=>{
        console.log("Done waiting");
    }, 2000);
}
firstTask();

// Task 2 — Callback hell simulation
// Simulate ordering food:
// Step 1: "Order placed" — immediately
// Step 2: "Food being prepared" — after 1 second
// Step 3: "Food delivered" — after 2 more seconds
// Step 4: "Enjoy your meal!" — after 1 more second
// Each step is a callback inside the previous one
// This is callback hell — feel the pain of nesting
function callbackHell(){
    console.log("Order Placed");

    setTimeout(() => {
        console.log("Food Being Prepared");
        setTimeout(() => {
            console.log("Food Delivered");
                setTimeout(() => {
                    console.log("Enjoy your meal!")
                }, 1000);
        }, 2000);
    }, 1000);
}

callbackHell();