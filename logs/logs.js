// Generate a random string of given length
function getRandomString(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

// Generate an array of random numbers
function getRandomNumbers(size, max) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * max));
}

// Example usage
console.log('Random String:', getRandomString(10));
console.log('Random Numbers:', getRandomNumbers(5, 100));

// Delayed execution with setTimeout
setTimeout(() => {
    console.log('This message appears after 2 seconds');
}, 2000);
