// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes 
//at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var Guest = ["Alisha", "Safiya", "Samara"];
Guest.forEach(function (val) {
    console.log(" You are invited to dinner with us, ".concat(val));
});
