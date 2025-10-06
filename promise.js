const resolvedPromise = Promise.resolve("Promise fulfilled!");
resolvedPromise.then(console.log); // Logs: "Promise fulfilled!"
const rejectedPromise = Promise.reject("Promise rejected!");
rejectedPromise.catch(console.log); // Logs: "Promise rejected!"
function delayedPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolved after 2 seconds");
        }, 2000);
    });
}

delayedPromise().then(console.log); // Logs after 2 seconds
Promise.resolve(10)
    .then(value => console.log(value)); // Logs: 10
Promise.resolve("hello")
    .then(value => console.log(value + " world")); // Logs: "hello world"
Promise.resolve({ success: true, message: "Data loaded" })
    .then(obj => console.log(obj.message)); // Logs: "Data loaded"
console.log("Start of script");

new Promise(function(resolve, reject) {
    resolve("Done!");
}).then(function(value) {
    console.log(value);
});

console.log("End of script");
function logMessage(msg) {
    console.log(msg);
}

Promise.resolve("Hello from the promise!").then(logMessage);
// Logs: "Hello from the promise!"
function testPromise(isSuccess) {
    return new Promise((resolve, reject) => {
        if(isSuccess) resolve("Success!");
        else reject("Failure!");
    });
}

testPromise(false).catch(err => console.log(err)); // Logs: "Failure!"
Promise.resolve("All good")
    .then(val => console.log("Then:", val))
    .catch(err => console.log("Catch:", err));
Promise.reject("Something went wrong")
    .then(val => console.log("Then:", val))
    .catch(err => console.log("Catch:", err));
new Promise(function(resolve, reject) {
    reject("Error found");
})
.then(function(value) {
    console.log("This will not run");
})
.catch(function(error) {
    console.log(error);
});
