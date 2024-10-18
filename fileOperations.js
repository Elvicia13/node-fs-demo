const fs = require('fs').promises;

// Async function to write a message to a file
async function createFile() {
    try {
        const data = "This is some file content!";
        await fs.writeFile('message.txt', data);
        console.log("File created and data written!");
    } catch (err) {
        console.error("Error writing to file", err);
    }
}

// Call the async function
createFile();
