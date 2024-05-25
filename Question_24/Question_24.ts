//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons,
// write more tests. Have at least one True and one False result for each of the following:


//• Tests for equality and inequality with strings
let flower1 = "rose";
console.log(flower1==="rose"? "True: FLower = Rose" : "False: FLower !== Rose ")

let flower2 = "Lavender";
console.log(flower2==="rose"? "True: FLower = Rose" : "False: FLower !== Rose ")

//• Tests using the lower case function
let flower3 = "ROSE";
console.log(flower3.toLocaleLowerCase()==="rose"? "True: FLower = rose" : "False: FLower !== rose ")

let flower4 = "LAVENDER";
console.log(flower4.toLocaleLowerCase() ==="rose"? "True: FLower = rose" : "False: FLower !== rose ")
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
//and less than or equal to

let x = 6;
let y = 10;
console.log(x === y? "Ture" : "False")
console.log(x !== y? "Ture" : "False")

console.log(6 > 5? "Ture" : "False")
console.log(1 > 5? "Ture" : "False")

console.log(1 < 2 ? "Ture" : "False")
console.log(6 < 3? "Ture" : "False")

console.log(6 >= 6? "Ture" : "False")
console.log(2 >= 5? "Ture" : "False")
console.log(7 >= 6? "Ture" : "False")

console.log(4 <= 4? "Ture" : "False")
console.log(6 <= 5? "Ture" : "False")
console.log(1 <= 3 ? "Ture" : "False")

//• Tests using "and" and "or" operators
 let Educated = true;
 let Employed = false;
 let speaks = true;
 console.log(Educated && Employed? "Ture" : "False")
 console.log(Educated && speaks? "Ture" : "False")

 console.log(Educated || Employed? "Ture" : "False")
 console.log(Educated || speaks? "Ture" : "False")

//• Test whether an item is in a array
let sweets = ["Tart", "Walnut Pie", "Cake"]
sweets.forEach((val) => {
    console.log(val === "Tart")
})
//• Test whether an item is not in a array
sweets.forEach((val) => {
    console.log(val === "chocolate")
})