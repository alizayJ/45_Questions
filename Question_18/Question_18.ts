//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let places = ['Middle East', 'Japan' ,'Bali', 'Turkiye', 'Russia'];
console.log(places ,'Original array');
let sorted_array = ['Middle East', 'Japan' ,'Bali', 'Turkiye', 'Russia'].sort()
console.log(sorted_array, 'In alphabetical order')
console.log(places, 'Array is still in original order')
let reverse_array = [...places].reverse()
console.log(reverse_array, 'In reverse order')
console.log(places, 'Array is still in original order')
console.log(places.reverse(), 'order has changes, original array reversed')
console.log(places.reverse(), 'order changed again, Array back to its original form')
console.log(places.sort(), 'Now original Array changed into alphbetical order')
console.log(places.reverse(), 'The original Array is now changed into Reversed alphbetical order')

