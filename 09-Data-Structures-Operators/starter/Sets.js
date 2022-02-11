'use strict';
/* A new data structure added in ES6

 - A collection of a unique values
 - No key values
 - Iterable
 - The order is irrelevant

*/

// Creating a new Set
const orderSet = new Set(['Pasta', 'Pizza', 'Pizza']);
console.log(orderSet);

// Getting the size
console.log(orderSet.size);

// Checking if the element is in the Set
console.log(orderSet.has('Pizza'));

// Adding new elements
orderSet.add('Garlic Bread');
console.log(orderSet);

// Deleting a element
orderSet.delete('Pasta');
console.log(orderSet);

// Deleting all elements
//orderSet.clear();
//console.log(orderSet);
// Loop over a Set
for (const order of orderSet) console.log(order);

// Removing the duplicated elements from a array using Set
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef'];
let staffUnique = new Set(staff);
console.log(staffUnique);

// converting Set to an array using spread operator
staffUnique = [...new Set(staff)];
console.log(staffUnique);
