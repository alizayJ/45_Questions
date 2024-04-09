// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
// You’ll have to think of someone else to invite.

//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest 
//who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still in your list.

 
 let Guest = ["Alisha" ,"Safiya", "Samara"]

 Guest.map((val) =>{
    if( val !== "Samara"){
        console.log(`You are invited to dinner with us, ${val}`)
    }
    else if(val === "Samara"){
        console.log(`${val} can't make to the dinner`)
    }
})
//splice( position to add, num of elements to remove, elements to be added.....+....)
  // splice returns an array of deleted value which we deleted from original array
  Guest.splice(2 , 1 ,"Eman")
  console.log(`updated list of guests:`,Guest)