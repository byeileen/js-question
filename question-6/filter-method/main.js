// Filter methods 
// 1. iterates an array
// 2. performs a check on each item in the array inside a callback function
// 3. callback function fires for each item in the array, performs a check
// 4. if the check passes, it will keep the item inside the filteret array. if not, it will filter it out and remove it
// they do NOT alter the original array. so after the filter, we will get a NEW array with the filters

const scores = [10, 15, 25, 5, 30, 50, 40];
//we use filter method to filter out scores that are not at least 20, or 20 and over

//as it's non destructive, we will store inside of a new constant
const filteredScores = scores.filter(score => { //20 refers to individual item. return either true or false
      return score > 20;
  });

  console.log(filteredScores);

  //example two
  // each items of the array is an object, with a name and premium property
  //we want to show who's a premium member
  const users = [
    {name:'shaun', premium: true},
    {name:'yoshi', premium: false},
    {name:'mario', premium: false},
    {name:'chsun-li', premium: true}
];

const premiumUsers = users.filter(user => user.premium); // return either true or false

console.log(premiumUsers);