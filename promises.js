const fs = require('fs');
const axios = require('axios')

// Function to read a .txt file using a promise
// function readFilePromise(filePath) {
//     // Creating and returning a new Promise
//     return new Promise((resolve, reject) => {
//         // Using the fs.readFile method to read the file asynchronously
//         fs.readFile(filePath, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err); // Reject the promise if there's an error
//             } else {
//                 resolve(data); // Resolve the promise with the file data
//             }
//         });
//     });
// }



// const filePath = 'data.txt';

// // // Using the promise to read the file
// readFilePromise(filePath)
//     .then(fileData => {
//         console.log('File content:', fileData);
//     })
//     .catch(error => {
//         console.error('Error reading file:', error);
//     });



// fs.readFile('data.txt', 'utf-8', (data, error) => {
//     if (data) {
//         console.log(data)
//     } else {
//         console.log(error)
//     }
// })

// readFile(filePath)



console.log("executed first")