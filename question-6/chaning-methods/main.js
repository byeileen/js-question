// Chaining methods

//objects, with a name and a price
const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50}
];

//filter the array with the filter method - product that isn't over 20 in price
//both filter and map methods returns a new array and work on arrays

//the first part returns an array
//we chain the map method onto it
//when chaining methods, we go to the next line and indent for easy reading
const promos = products
    .filter(product => product.price > 20)
    .map(product => `the ${product.name} is ${product.price / 2} pounds`) //we pass the string into a callback function. it's one line since we're only returning one value

console.log(promos);