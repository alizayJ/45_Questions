//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person 
//will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case sensitive. If 'John' has been used, 'JOHN' should not be accepted.
var new_users = ['STEPHEN', 'Mike', 'Jenny', 'Elina', 'Albert'];
var current_users = ['Eric', 'Emily', 'Stephen', 'Mike', 'Lily'];
new_users.forEach(function (val) {
    var taken = current_users.some(function (item) { return item.toLowerCase() === val.toLowerCase(); });
    if (taken) {
        console.log("username is not avaiable ".concat(val, ", try another username."));
    }
    else {
        console.log("username avaiable ".concat(val, "."));
    }
});
