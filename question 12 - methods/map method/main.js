// Map method
//takes an array and maps it into a new array 
//it iterates an array, and returns an updated value for each item, and pushes them into a new array.
//it is non-destructive and does NOT affect the original array

// simple example 
const prices = [20, 10, 30, 25, 15, 40, 80, 5];

//we want a new array with sale prices
const salePrices = prices.map(price => price / 2); //iterates the array, takes the price and returns a new value (it halfs each item)
console.log(salePrices); 

// example two
//change price only if it's original over 30
const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50}
];

//products over 30 should be sliced in half
const saleProducts = products.map(product => {
    if(product.price > 30){ //check if price is over 30
        return {name: product.name, price: product.price / 2}//return a new object, and slices it in half
    } else {
        return product; //returns the products that are not over 30
    }
});
console.log(saleProducts);