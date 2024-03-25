//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magicians: string[] = ['sir zia', 'ameen alam', 'danyal nagori'];

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push("The Great Magician " + magician);
    }
    return great_magicians;
}

// Create a copy of the original magicians array
let magiciansCopy: string[] = [];
for (let magician of magicians) {
    magiciansCopy.push(magician);
}

// Call make_great function with the copied array
let great_magicians = make_great(magiciansCopy);

// Show original magicians array
console.log("Original Magicians:");
show_magicians(magicians);

// Show magicians with "The Great" added
console.log("\nGreat Magicians:");
show_magicians(great_magicians);