// 1. Variables and Data Types
console.log("1. Variables and Data Types");
let personName = "Jordan Huynh";
let personAge = 24;
let isStudent = true;

console.log("Name:", personName, "| Type:", typeof personName);
console.log("Age:", personAge, "| Type:", typeof personAge);
console.log("Is Student:", isStudent, "| Type:", typeof isStudent);

console.log("--------------------------------");

// 2. Basic Arithmetic Operations
console.log("2. Basic Arithmetic Operations");
const num1 = 15;
const num2 = 5;

console.log("num1:", num1)
console.log("num2:", num2)
console.log(`Addition: ${num1} + ${num2} =`, num1 + num2);
console.log(`Subtraction: ${num1} - ${num2} =`, num1 - num2);
console.log(`Multiplication: ${num1} * ${num2} =`, num1 * num2);
console.log(`Division: ${num1} / ${num2} =`, num1 / num2);

console.log("--------------------------------");

// 3. Working with Strings
console.log("3. Working with Strings");
const sentence = "This is a sample sentence.";

console.log(sentence)
console.log("Length:", sentence.length);
console.log("First Character:", sentence[0]);
console.log("Last Character:", sentence[sentence.length - 1]);

console.log("--------------------------------");

// 4. Math Object
console.log("4. Math Object");
let negativeNumber = -25;

// 
console.log("Square Root:", Math.sqrt(negativeNumber));
console.log("Number Squared:", Math.pow(negativeNumber, 2));
console.log("Absolute Value:", Math.abs(negativeNumber));

console.log("--------------------------------");

// 5. Boolean Logic and Comparison Operators
console.log("5. Boolean Logic and Comparison Operators");
let firstValue = 20;
let secondValue = 10;

console.log("firstValue:", firstValue)
console.log("secondValue:", secondValue)
console.log("Is firstValue > secondValue?", firstValue > secondValue);
console.log("Is firstValue < secondValue?", firstValue < secondValue);
console.log("Is firstValue === secondValue?", firstValue === secondValue);

console.log("--------------------------------");

// 6. Logical Operators
console.log("6. Logical Operators");
let bool1 = true;
let bool2 = false;

console.log("AND (&&):", bool1 && bool2);
console.log("OR (||):", bool1 || bool2);
console.log("NOT (!):", !bool1);

console.log("--------------------------------");

// 7. Using Template Literals
console.log("7. Using Template Literals");
const firstName = "Lebron";
const lastName = "James";

const greeting = `Hello, my name is ${firstName} ${lastName}.`;
console.log(greeting);