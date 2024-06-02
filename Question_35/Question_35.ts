//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, 
//and then use a for loop to print out the name of each animal.
// • Modify your program to print a statement about each animal, such as A dog would make a great pet. 
//• Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals 
//would make a great pet!

const wildanimals = ["Lion" , "Deer", "Panther"]

for(let i = 0; i < wildanimals.length; i++){
    console.log(wildanimals[i]);
}
// modified
for(let wild of wildanimals){
    console.log(wild,"is a wild animal.")
}
// last sentence 
console.log("The mentioned animals are Wild animals. They live in forest and two of them are dangerous for human beings namely Lion and Panther.")