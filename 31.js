//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
import inquirer from "inquirer";
let usernames = ['admin', 'john', 'eric', 'alice'];
let answer = await inquirer.prompt([
    {
        name: "username",
        type: "string",
        message: "enter user name",
    }
]);
if (answer.username === 'admin') {
    console.log("Hello admin, would you like to see a status report?");
}
else if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    console.log("Hello " + answer.username + ", thank you for logging in again.");
}
