//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. 
//It should then accept an arbitrary number of keyword arguments. Call the function with the required information and 
//two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all 
//the information was stored correctly.

 interface Car{
    Manufacturer: string;
    Model: string;
    [key: string]: any; // for name-value or key-value pairs
 }
 function car_info(manufacturer: string, model:string, ...addtional:[string, any][]){
    let car: Car= {
        Manufacturer: manufacturer,
        Model: model,
    }
    for(const [key, value] of addtional){
        car[key] = value;
    }
    return car;
 }
 let car_1 = car_info("Toyota", "Corolla", ["Color","Blue"], ["Autonomous", true], ["EV", false], ["Category","Expensive"]);
 let car_2 = car_info("Tesla", "Cyber Truck", ["Color", "Black"], ["EV", true], ["Category","Expensive"])
 console.log(car_1);
 console.log(car_2);
 
 