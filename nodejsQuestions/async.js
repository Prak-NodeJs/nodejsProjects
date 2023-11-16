// function resolveAfter2Seconds() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     console.log('hello')
// }

// asyncCall();
// Event listener for unhandled exceptions
process.on('uncaughtException', (err) => {
    console.error(`Uncaught Exception: ${err.message}`);
    // You may want to perform additional cleanup or logging here

    // Terminate the application (exit with a non-zero code)
    process.exit(1);
});

// Simulate an unhandled exception
setTimeout(() => {
    throw new Error('Simulated unhandled exception');
}, 1000);

// This code will continue to execute even if an unhandled exception occurs,
// but the process.on('uncaughtException') event will catch it.
console.log('Application is still running...');


