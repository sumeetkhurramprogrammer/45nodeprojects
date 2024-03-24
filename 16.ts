//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

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