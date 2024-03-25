//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//• Write one version of this program that runs the if block and another that runs the else block
const alien_color = "green";
// Write an if statement to test whether the alien’s color is green.
// If it is, print a message that the player just earned 5 points.
import inquirer from "inquirer";
let answer = await inquirer.prompt([{
        name: "color",
        type: "string",
        messege: "please guess a color",
    }]);
if (answer.color === alien_color) {
    console.log("congratulation you earned 5 points for shooting the alien");
}
else {
    console.log("that the player just earned 10 points.");
}
