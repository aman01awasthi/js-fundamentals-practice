// Write an async function that:
// - waits 1 second // - then returns "Ready to build!"
// - log the result when done // Use your wait() function from yesterday

async function ready(ms) {
    await wait(ms);
    console.log("Ready To Build");    
}

function wait(ms){
    let promise = new Promise((resolve)=> {
        setTimeout(resolve, ms);
    })
    return promise;
}

ready(1000);