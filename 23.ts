//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

// Conditional test 1: Equality test with strings
let color: string = 'blue';
console.log("Is color equal to 'blue'? I predict True.");
console.log(color == 'blue');

// Conditional test 2: Inequality test with strings
console.log("Is color not equal to 'red'? I predict True.");
console.log(color != 'red');

// Conditional test 3: Lowercase test
let fruit: string = 'Apple';
console.log("Is fruit lowercase? I predict False.");
console.log(fruit.toLowerCase() === fruit);

// Conditional test 4: Numerical tests
let number: number = 10;
console.log("Is number equal to 10? I predict True.");
console.log(number == 10);

console.log("Is number greater than 5? I predict True.");
console.log(number > 5);

console.log("Is number less than or equal to 10? I predict True.");
console.log(number <= 10);

// Conditional test 5: Logical AND and OR operators
let x: number = 5;
let y: number = 10;
console.log("Is x greater than 3 and y less than 15? I predict True.");
console.log(x > 3 && y < 15);

console.log("Is x greater than 7 or y less than 8? I predict True.");
console.log(x > 7 || y < 8);

// Conditional test 6: Test whether an item is in an array
let colors: string[] = ['red', 'green', 'blue'];
console.log("Is 'red' in the colors array? I predict True.");
console.log(colors.includes('red'));

// Conditional test 7: Test whether an item is not in an array
console.log("Is 'yellow' not in the colors array? I predict True.");
console.log(!colors.includes('yellow'));

// Conditional test 8: Tests for equality and inequality with strings
let name1: string = 'John';
let name2: string = 'john';
console.log("Is name1 equal to name2? I predict False.");
console.log(name1 === name2);

// Conditional test 9: Numerical tests involving greater than and less than
let age: number = 25;
console.log("Is age greater than 18? I predict True.");
console.log(age > 18);

console.log("Is age less than 21? I predict False.");
console.log(age < 21);

// Conditional test 10: Tests using the "and" and "or" operators
let temperature: number = 25;
console.log("Is temperature between 20 and 30 degrees Celsius? I predict True.");
console.log(temperature >= 20 && temperature <= 30);

console.log("Is temperature less than 0 or greater than 40 degrees Celsius? I predict False.");
console.log(temperature < 0 || temperature > 40);

// Conditional test 11: Test whether an item is in an array
let fruits: string[] = ['apple', 'banana', 'orange'];
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes('banana'));

// Conditional test 12: Test whether an item is not in an array
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes('grape'));