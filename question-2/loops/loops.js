//array with people
let people = ['mario','luigi','bob','peach','toad'];

//For loop

for(let i= 0; i < people.length; i++){
    let person = people[i];
    console.log(person);
};

console.log('.....');

//foreach loop

people.forEach(function(person){
    console.log(person);
});