// Sort method

// example 1 - sorting strings
//we want to sort in alphabetic order
//this is destructive - alters directly the original array
const names = ['yoshi','toad','peach','luigi', 'mario',];

//sort has an algorithm that automatically sorts strings alphabetically
names.sort()
console.log(names);

// example 2 - sorting numbers 
//it only looks onto the first numbers. it doesn't takes it as a whole number, but sorts from the first number

const scores = [70, 50, 45, 35, 20, 10, 5];

//we use 'reverse' method to turn the array around, so the last will be first
scores.reverse();
console.log(scores);

// example 3 - sorting objects

//we want to sort by scores
const players = [
    {name: 'mario', score: 20},
    {name: 'luigi', score: 10},
    {name: 'yoshi', score: 50},
    {name: 'toad', score: 30},
    {name: 'peach', score: 20},
];
//we have to provide a function as an argument to the sort method
players.sort((a,b) => { //a,b, represents elements inside of the array. we compare them to say which comes first
    //it decides is by returning a value that is either zero, or a positive or negative number. positive = first, negative = last
    if(a.score > b.score) {
        return -1;
    }
    else if (b.score > a.score){
        return 1;
    } else{
        return 0; //if both are equal
    }
});
console.log(players);