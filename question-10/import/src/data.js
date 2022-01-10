//responsible for manipulating data

const users = [
    {name:'luigi', premium: true},
    {name:'yoshi', premium: false},
    {name:'mario', premium: false},
    {name:'peach', premium: false},
    {name:'toad', premium: true}
];

 const getPremUsers = (user) => {
    return users.filter(user => user.premium) //if premium is true, it will keep it inside the filtered array
};

//default value that we export from this file
//there's only 1 default value per file
//export default users; 

//exports a named value and a default at the same time
export { getPremUsers, users as default};