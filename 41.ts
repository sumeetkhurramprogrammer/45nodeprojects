
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicians: string[] = ['sir zia ', 'ameen alam', 'danyal nagori'];

function show_magicians(magicians: string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push((magician));
    }
    return great_magicians;
}

show_magicians(make_great(magicians.slice())); // Original list remains unchanged