
const fs = require('fs');

// Function to read the contents of a file asynchronously
function readFileAsync(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            // Pass the error to the callback
            callback(err, null);
        } else {
            // Pass the data to the callback
            callback(null, data);
        }
    });
}

// // Example usage of the readFileAsync function
const filePath = 'D:/NodejsProjects/nodejsProject/nodejsQuestions/data.txt';

readFileAsync(filePath, (error, content) => {
    if (error) {
        console.error(`Error reading the file: ${error.message}`);
    } else {
        console.log(`File content: ${content}`);
    }
});



const axios = require('axios');

// Function to fetch data from an API asynchronously
function fetchDataFromAPI(apiUrl, callback) {
    axios.get(apiUrl)
        .then(response => {
            // Simulating asynchronous behavior with setTimeout
            setTimeout(() => {
                callback(null, response.data);
            }, 1000);
        })
        .catch(error => {
            callback(error, null);
        });
}

// Example usage
const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';
fetchDataFromAPI(apiUrl, (error, data) => {
    if (error) {
        console.error(`Error fetching data: ${error.message}`);
    } else {
        console.log(`Fetched data: ${JSON.stringify(data)}`);
    }
});



function add(a, b, callback) {
    if (a && b) {
        callback(null, a + b)
    } else {
        callback('error happend', null)
    }
}

add(3, 4, (error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log(data)
    }
})