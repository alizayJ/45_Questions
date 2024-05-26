//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check 
//for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your
// array, the if block should print a statement, such as You really like bananas!


// 
// Array of three favorite fruits
let favorite_fruits = ["Mango", "Apple", "Banana"];
favorite_fruits.forEach((val) => {
    if(val === "Mango") console.log ('I reall like Mangoes')
    else if(val === "Apple") console.log('I really like Apple')
    else if(val === "Grapes") console.log("I really like Grapes")
    else if(val === "Pineapple") console.log("I really like Pineapples")
    else if(val === "Banana" ) console.log("I really like Banana")
})