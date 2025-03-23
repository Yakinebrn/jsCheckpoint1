// Task 1 : string manipulation functions

// Reverse sentence :
function reverseSentence(str) {
    return str
        .split(" ") // Split into words
        .map((word) => word.split("").reverse().join("")) // Reverse each word
        .reverse() // Reverse the order of words
        .join(" "); // Join them back together
}

let inputString = "black prince white prince";
let reversedString = reverseSentence(inputString);
console.log(reversedString);

// Count characters :
function countCharacters(str) {
    return str.length;
}
let sentence = "mao mao";
let numOfCharacters = countCharacters(sentence);
console.log("Number of characters:", numOfCharacters);

// Capitalize word :
function capitalizeWords(sentence) {
    return sentence
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}
let phrase = "west end girls";
let capitalizedSentence = capitalizeWords(phrase);
console.log(capitalizedSentence);

// Task 2 : Array functions

// Find maximum and minimum :
function findMaxMin(arr) {
    if (arr.length === 0) return { max: null, min: null };
    return { max: Math.max(...arr), min: Math.min(...arr) };
}
const numbers = [10, 1, 36, 78, 2];
const { max, min } = findMaxMin(numbers);
console.log(`Maximum: ${max}, Minimum: ${min}`);

// Sum of array :
function sumOfTheArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
const total = sumOfTheArray(numbers);
console.log(`sum: ${total}`);

// Filter array :
function filterArray(arr, condition) {
    return arr.filter(condition);
}

const Nombres = [3, 1, 7, 9, 2, 5];
const filteredNombres = filterArray(Nombres, (num) => num % 2 === 0);
console.log(`Filtered: ${filteredNombres}`);

// Task 3 : Mathematical functions

// Factorial function :
function factorial(n) {
    if (n < 0) return "invalid input";
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(3));

// Prime number check :
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}
console.log(isPrime(10));
console.log(isPrime(5));

// Fibonacci sequence
function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n);
}
console.log(fibonacci(10));
