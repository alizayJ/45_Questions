//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of
// magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magician_name = ["David Blaine", "David Copperfield", "Dynamo", "Lance Burton", "David Nixon"];
function make_great(magician) {
    for (var i = 0; i < magician.length; i++) {
        magician[i] = "the great " + magician[i];
    }
    ;
    // return magician
}
console.log(make_great(magician_name));
