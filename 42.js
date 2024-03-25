//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let magicians = ['sir zia ', 'ameen alam', 'danyal nagori'];
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    let great_magicians = [];
    for (let magician of magicians) {
        great_magicians.push("The Great Magician", (magician));
    }
    return great_magicians;
}
show_magicians(make_great(magicians.slice())); // Original list remains unchanged
export {};
