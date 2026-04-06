// Write a closure that tracks how many times // a function has been called.
// Each call should log: "Called X times"
// Expected:
// let track = callTracker();
// track(); // "Called 1 times" // track(); // "Called 2 times" // track(); // "Called 3 times"
function callTracker(){
    let log = 0;
    return function(){
        log++;
        return console.log(`Called ${log} times`);
    }
}

let track = callTracker();
track();
track();
track();