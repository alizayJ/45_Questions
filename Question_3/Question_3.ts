// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

 let person_name = "eric Smith";


// // into uppercase
 console.log(person_name.toUpperCase());


// //into lowercase
 console.log(person_name.toLowerCase());

 
// into title case
//it can be obtained from regular expression (regex) and can be found on website regexr.com
let toTitleCase = (str) => {
  return str.replace(/\w\S*/g, (text)=>{
  return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
})
}
console.log(toTitleCase(person_name));