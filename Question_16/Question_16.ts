// More Guests: You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing
// people that you found a bigger dinner table.

let guests = ["Alisha" ,"Safiya", "Eman"];
 guests.forEach((val) => {
    console.log(val);
   })
 console.log('"we found a bigger table, Now we can invite more people"');
//• Add one new guest to the beginning of your array.
guests.unshift("Elina")
//• Add one new guest to the middle of your array. 
guests.splice(2,1,"Sehrish")
//• Use append() to add one new guest to the end of your list. 
guests.push("Maheen")
//• Print a new set of invitation messages, one for each person in your list.
guests.forEach(val => 
  console.log("You are invited for having dinner with us", val)
)

