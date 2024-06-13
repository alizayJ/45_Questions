//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. 
//Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians()
// with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var magician_name = ["David Blaine", "David Copperfield", "Dynamo", "Lance Burton", "David Nixon"];
// Modified Array
function make_great(magician) {
    var new_magician = [];
    for (var i = 0; i < magician.length; i++) {
        new_magician.push("the great " + magician[i]);
    }
    ;
    return new_magician;
}
// Original Array
function show_magicians(magician) {
    //for(let i = 0; i < magician.length; i++){
    console.log(magician);
    //}
}
console.log("Original Array ");
show_magicians(magician_name);
console.log("Modified Array");
console.log(make_great(magician_name));
