//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that 
//collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the 
//function three times, using a different number of arguments each time.
var sandwiches = function () {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    var order = "you Order Sandwiches with these items: " + items.join(",") + ".";
    return order;
};
console.log(sandwiches("Pepproni", "Cheese", "Steak", "Ranch"));
console.log(sandwiches("Chicken", "Garlic", "Mayo"));
console.log(sandwiches("Shrimp", "Yogurt"));
