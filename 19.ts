//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

// List of people you'd like to invite to dinner
let guests: string[] = ["Albert Einstein", "Leonardo da Vinci", "Marie Curie"];

// Print invitation messages
for (let i = 0; i < guests.length; i++) {
    console.log("Dear__" + (guests[i]) + "__you are cordially invited to dinner");
}

// Guest who can't make it
let unableToAttend = guests.pop() ;

// New person to invite
let newInvitee: string = "Nikola Tesla";
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

let guestsfinal: string[] = ["Albert Einstein", "Leonardo da Vinci", "Marie Curie"];

// Print a message indicating the number of people invited to dinner
console.log("we are inviting_" + (guests.length) + "_people to dinner" );
