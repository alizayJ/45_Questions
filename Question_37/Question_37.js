//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, msg) {
    if (size === void 0) { size = 'Large'; }
    if (msg === void 0) { msg = 'I love TypeScript.'; }
    console.log("The size of shirt is ".concat(size, ",\nand the message to be printed is \"").concat(msg, "\""));
}
//with large and default message
make_shirt();
// with medium size with default message
make_shirt('Medium');
// different size with different message
make_shirt('Small', 'Cool Day');
