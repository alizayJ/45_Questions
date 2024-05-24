//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only
// two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for
// dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, 
//print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an 
//empty list at the end of your program. 


// From question 16 we have the array
let Guests = ["Elina", 'Alisha', 'Sehrish', 'Eman', 'Maheen']
console.log("We regret to announce that we won't have the table on time")
let new1 = Guests.pop()
console.log(`${new1}, we’re sorry we can’t invite you to dinner.`)
let new2 = Guests.pop()
console.log(`${new2}, we’re sorry we can’t invite you to dinner.`)
let new3 = Guests.pop()
console.log(`${new3}, we’re sorry we can’t invite you to dinner.`)

Guests.forEach(val => {
    console.log(val,`We want to let you know that you're still invited`)
});
Guests.pop()
Guests.pop()
console.log(Guests, 'Empty Array')