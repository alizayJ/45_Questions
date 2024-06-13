//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
//which prints the name of each magician in the array.
var magician_name = ["David Blaine", "David Copperfield", "Dynamo", "Lance Burton", "David Nixon"];
function show_magicians(magician) {
    magician.forEach(function (val) {
        console.log(val);
    });
}
show_magicians(magician_name);
