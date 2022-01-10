//making a object using object literals

let user = {
    //properties is given in key-value 
    name: 'Crystal',
    age: 30,
    email: 'email@email.com',
    location: 'Berlin',
    blogs: ['10 recipes with avocado','Top 10 meditation songs']
};

console.log(user);

//get properties

console.log(user.name);

//another way of getting the property is with []

console.log(user['name']);

//set properties

user.age = 35;
console.log(user.age);

//another way of setting the property is with []

user['name'] = 'Karen';
console.log(user['name']);
