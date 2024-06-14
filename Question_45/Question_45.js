//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. 
//It should then accept an arbitrary number of keyword arguments. Call the function with the required information and 
//two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all 
//the information was stored correctly.
function car_info(manufacturer, model) {
    var addtional = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        addtional[_i - 2] = arguments[_i];
    }
    var car = {
        Manufacturer: manufacturer,
        ModelName: model,
    };
    for (var _a = 0, addtional_1 = addtional; _a < addtional_1.length; _a++) {
        var _b = addtional_1[_a], key = _b[0], value = _b[1];
        car[key] = value;
    }
    return car;
}
var car_1 = car_info("Toyota", "Corolla", ["Color", "Blue"], ["Autonomous", true], ["Category", "Expensive"], ["EV", true]);
var car_2 = car_info("Tesla", "Cybertruck", ["color", "Black"], ["EV", true], ["Battery", "Long Range"]);
console.log(car_1);
console.log(car_2);
