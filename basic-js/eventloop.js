const fs = require('fs');

// Schedule a timeout callback with a delay of 0ms
setTimeout(() => {
    console.log('Timeout callback');
}, 0);

// Schedule an immediate callback (executes after I/O events)
setImmediate(() => {
    console.log('Immediate callback');
});

// Schedule a file read operation (asynchronous I/O)
fs.readFile('file.txt', () => {
    console.log('File read completed');

    // Schedule a timeout callback inside the file read callback
    setTimeout(() => {
        console.log('Timeout inside readFile');
    }, 0);

    // Schedule an immediate callback inside the file read callback
    setImmediate(() => {
        console.log('Immediate inside readFile');
    });
});

// Schedule a process.nextTick callback (executes before any other I/O or timer callbacks)
process.nextTick(() => {
    console.log('Next tick');
});
