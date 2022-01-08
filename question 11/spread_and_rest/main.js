//rest parameter
//takes series of numbers and puts out an array with the numbers doubled
//rest parameter ...nums, takes all arguments we put into the function, and bundles them up into a single array parameter
const double = (...nums) => {
    console.log(nums); //takes the numbers from result and bundle into an array called nums
    return nums.map(num => num*2); //create new array which double
}

const result = double(1,2,5,7,9,8);
console.log(result);

//spread syntax (arrays)
//similar, but works kind of oppisite
//we use spread syntax to spread out an array into its individual components
const people = ['mario','luigi','yoshi'];
console.log(...people);

const members = ['toad','peach','bowser',...people]; //unpacks the people array and insert it into the members array
console.log(members);

//spread syntax (objects)

const person = {name: 'leia', age: 30, job:'space princess'};
//create a copy from an object
const personClone = {...person, location: 'denmark'}; //takes the properties from person into personCLone
console.log(personClone);


