//where we write code
// ./ current directory
import {styleBody, addTitle, contact} from './dom';

//import default value - we don't use curly braces
//the sentence imports the default value and a named import inside curly braces
import users, {getPremUsers} from './data';


console.log('index file');
addTitle('test');
styleBody();
console.log(contact);

const premUsers = getPremUsers(users);
console.log(users, premUsers);