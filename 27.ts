//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

//• If the alien is green, print a message that the player earned 5 points.

//• If the alien is yellow, print a message that the player earned 10 points.

//• If the alien is red, print a message that the player earned 15 points.

//• Write three versions of this program, making sure each message is printed for the appropriate color alien.


//Alien Colors #3: Turn your if-else chain from Alien Colors #2 into an if-else chain.
// If the alien is green, print a message that the player earned 5 points.
// If the alien is yellow, print a message that the player earned 10 points.
// If the alien is red, print a message that the player earned 15 points.
let alien_color3: string ;

import inquirer from "inquirer";
let answer = await inquirer.prompt([{
        name: "alien_color",
        type: "string",
        messege: "please guess a color",
    }]);

if (answer.alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else if (answer.alien_color === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
} else if (answer.alien_color === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}