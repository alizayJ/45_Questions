// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that 
//stores several examples. 
//Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var ownArray = ["Helicopter", "Boat", "Car", "Motorcycle"];
ownArray.forEach(function (val) {
    if (val === "Helicopter") {
        console.log("".concat(val, " are hard to design"));
    }
    else if (val === "Boat") {
        console.log("".concat(val, " float of water because of buoyancy"));
    }
    else if (val === "Car") {
        console.log("".concat(val, " are easy to drive"));
    }
    else if (val === "Motorcycle") {
        console.log("".concat(val, " are hard to drive"));
    }
    else {
        console.log(" transpotation is easy");
    }
});
