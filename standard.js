function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function isPalindrome(str) {
    const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}

console.log(getRandomNumber(1, 100));
console.log(reverseString('hello'));
console.log(isPalindrome('racecar'));

setTimeout(() => {
    console.log('Executed after 3 seconds');
}, 3000);
