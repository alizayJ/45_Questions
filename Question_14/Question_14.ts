// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes 
//at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
 

let Guest = ["Guest_1", "Guest_2" ,"Guest_3"]

Guest.forEach((val) => {
    console.log(` You are invited to dinner with us, ${val}`)
})