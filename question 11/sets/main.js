//new data structure
//allows to store a list of any kind of unique value
//any given set, certain value can only be present once - don't allow duplicates

//shows duplicate
const names = ['mario','luigi','mario','toad'];
console.log(names);

//delete duplicates
//'new' keyword and Set constructor
const namesSet = new Set(names);
console.log(namesSet);

//eliminating duplicates from an array, and to be left with an array 
//use spread syntax back into a new array

//makes a new array 'uniqueNames
//creates a new Set, and spread the values into a new array
const uniqueNames = [...new Set(names)];
console.log(uniqueNames);

//example 2 - add elements
const ages = new Set();
//add values to it
ages.add(20);
ages.add(25).add(30); //chaining add methods

//example 3 - delete elements
//ages.size - shows size
//has - shows if the set has a certain value
ages.delete(25);
console.log(ages, ages.size);

//clears the set
//ages.clear(); 

//example 4 - iterate through a set with forEach
const marioChar = new Set ([
    {name: 'bowser', age: 30},
    {name: 'yoshi', age: 20},
    {name: 'waluigi', age: 25},
]);

marioChar.forEach(marioChar => {
    console.log(marioChar.name, marioChar.age);
})