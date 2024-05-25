//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction 
//for the results of each test. Your code should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


// ? is a ternary operator, var result = condition ? valueIfTrue : valueIfFalse;
console.log('"False tests"')
// Test 1 , check if the variable even is even or not.
let even = 11;
console.log(even %2 === 0? "Test1: True it is Even" : "Test 1: False it is not Even")// false it is not Even
console.log(`even = ${even}`)
// Test 2, checks if string starts with A
let string = 'Banana';
console.log(string[0]=== "A"? "Test 2: The string starts with 'A' ":"Test 2: The string doesn't start with 'A'")// false string doesn't start with A
console.log(`string = ${string}`)
// Test 3, check if the number is odd or not
let odd = 2;
console.log(odd %2 !== 0? "Test 3: True it is Odd" : "Test 3: False it is not Odd")// false it is not odd
console.log(`odd = ${odd}`)
// Test 4, checks if voltage is 5 or not
let volt = 4;
console.log(volt === 5? "Test 4: True it is 5" : "Test 4: False it is not 5")// false it is not 5
console.log(`volt= ${volt}`)
// Test 5, checks if theage is 40 or not
let age = 40;
console.log(age === 30? "Test 5: He is 30" : "Test 5: False He is not 30")// false he is not 30
console.log(`age= ${age}`)




console.log('"\n True tests"')

// Test 6 , check if the variable even is even or not.
let even_ = 2;
console.log(even_ %2 === 0? "Test 6: True it is Even" : "Test 6: False it is not Even")// True it is  Even
console.log(`even = ${even_}`)
// Test 7, checks if string starts with A
let string_ = 'Apple';
console.log(string_[0]=== "A"? "Test 7: The string starts with 'A' ":"Test 7: The string doesn't start with 'A'")// true string does start with A
console.log(`string = ${string_}`)
// Test 8, check if the number is odd or not
let odd_ = 1;
console.log(odd_ %2 !== 0? "Test 8: True it is Odd" : "Test 8: False it is not Odd")// True it is  odd
console.log(`odd = ${odd_}`)
// Test 9, checks if voltage is 5 or not
let volt_ = 5;
console.log(volt_ === 5? "Test 9: True it is 5" : "Test 9: False it is not 5")// True it is  5
console.log(`volt= ${volt_}`)
// Test 10, checks if theage is 40 or not
let age_ = 40;
console.log(age_ === 40? "Test 10: He is 40" : "Test 10: False He is not 40")// false he is not 30
console.log(`age= ${age_}`)


