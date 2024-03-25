//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
// Conditional test 1: Tests for equality and inequality with strings
let name1 = 'John';
let name2 = 'john';
console.log("Is name1 equal to name2? I predict False.");
console.log(name1 === name2);
// Conditional test 2: Lowercase test
let fruit = 'Apple';
console.log("Is fruit lowercase? I predict False.");
console.log(fruit.toLowerCase() === fruit);
// Conditional test 3: Numerical tests involving greater than and less than
let age = 25;
console.log("Is age greater than 18? I predict True.");
console.log(age > 18);
console.log("Is age less than 21? I predict False.");
console.log(age < 21);
// Conditional test 4: Tests using the "and" and "or" operators
let temperature = 25;
console.log("Is temperature between 20 and 30 degrees Celsius? I predict True.");
console.log(temperature >= 20 && temperature <= 30);
console.log("Is temperature less than 0 or greater than 40 degrees Celsius? I predict False.");
console.log(temperature < 0 || temperature > 40);
// Conditional test 5: Test whether an item is in an array
let fruits = ['apple', 'banana', 'orange'];
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes('banana'));
// Conditional test 6: Test whether an item is not in an array
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes('grape'));
export {};
