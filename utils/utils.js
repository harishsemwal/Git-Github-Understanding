// Generate a random hexadecimal color
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Shuffle an array
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Example usage
console.log('Random Hex Color:', getRandomHexColor());
console.log('Shuffled Array:', shuffleArray([1, 2, 3, 4, 5]));

// Fetch data from an API
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log('Fetched Data:', data))
    .catch(error => console.error('Error:', error));