// Creating a promise that resolves a message
const displayMessage = new Promise((resolve, reject) => {
    let message = "Hello, this is your promise!";
    resolve(message);  // Promise resolved with a message
});

// Call the promise and handle the resolved value
displayMessage.then((message) => {
    console.log(message);  // Outputs: Hello, this is your promise!
}).catch((error) => {
    console.log("Promise failed: ", error);
});
