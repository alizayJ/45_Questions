//City Names: Write a function called city_country() that takes in the name of a city and its country. 
//The function should return a string formatted like this: "Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    var result = "\"".concat(city, ", ").concat(country, "\"");
    return result;
}
var city_country_pairs1 = city_country("Karachi", "Pakistan");
console.log(city_country_pairs1);
var city_country_pairs2 = city_country("Dhaka", "Bangladesh");
console.log(city_country_pairs2);
var city_country_pairs3 = city_country("Baghdad", "Iraq");
console.log(city_country_pairs3);
