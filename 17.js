//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// List of people you'd like to invite to dinner
let guests = ["Albert Einstein", "Leonardo da Vinci", "Marie Curie"];
// Print invitation messages
for (let i = 0; i < guests.length; i++) {
    console.log("Dear__" + (guests[i]) + "__you are cordially invited to dinner");
}
// Guest who can't make it
let unableToAttend = guests.pop();
// New person to invite
let newInvitee = "Nikola Tesla";
guests.push(newInvitee);
// Print new invitation messages
for (let i = 0; i < guests.length; i++) {
    console.log("Dear__" + (guests[i]) + "__you are cordially invited to dinner");
}
// Inform about the bigger dinner table
console.log("Good news! We found a bigger dinner table!");
// Add new guests
guests.unshift("Isaac Newton");
guests.splice(Math.floor(guests.length / 2), 0, "Galileo Galilei");
guests.push("Ada Lovelace");
// Print new invitation messages
for (let i = 0; i < guests.length; i++) {
    console.log("Dear__" + (guests[i]) + "__you are cordially invited to dinner");
}
// Inform about the limitation on guests
console.log("Unfortunately, we can only invite two guests for dinner.");
// Remove guests until only two remain
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log("Sorry" + (removedGuest) + "we can't invite you to dinner");
}
// Print invitation messages to the remaining guests
for (let i = 0; i < guests.length; i++) {
    console.log("Dear__" + (guests[i]) + "__you are still invited to dinner");
}
// Clear the guest list
guests = [];
console.log("Guest list is now empty:", guests);
export {};
