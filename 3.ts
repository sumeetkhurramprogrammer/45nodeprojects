//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName: string = "sUmEeT";
let lowercaseName: string = personName.toLowerCase();
let uppercaseName: string = personName.toUpperCase();
let titlecaseName: string = personName.replace(/\b\w/g, (char) => char.toUpperCase());

console.log("Lowercase:", lowercaseName);
console.log("Uppercase:", uppercaseName);
console.log("Titlecase:", titlecaseName);