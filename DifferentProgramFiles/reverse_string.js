
function reverseString(str) {
    return str.split('').reverse().join('');
}

const input = prompt("Enter a string:");
console.log("Reversed string:", reverseString(input));
