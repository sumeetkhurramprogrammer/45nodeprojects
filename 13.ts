//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

// Store examples of your favorite mode of transportation in an array
let transportation: string[] = ["electric 125 motorcycle", "4x4revocar(dala)", "mountain bicycle"];

// Print statements about these items
for (let i = 0; i < transportation.length; i++) {
    console.log("I would like to own a" + (transportation[i]) );
}