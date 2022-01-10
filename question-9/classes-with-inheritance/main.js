class User {
    //constructor function - constructs objects and sets properties
    constructor(username, email){
        //properties of the object
        this.username = username;
        this.email = email;
        this.score = 0; //start score
    }
    //methods
    login(){
        console.log(`${this.username} just logged in`);
        return this; //return object instance
    }
    logout(){
        console.log(`${this.username} just logged out`);
        return this; 
    }
    //chaining methods
    inScore(){
        this.score +=1; //increase by 1
        console.log(`${this.username} has a score of ${this.score}`);
        return this; 
    }
}

// Inheritance
class Admin extends User {
    //Admin constructor
    constructor(username, email, title){
        super(username,email); //parent class constructor
        this.title = title;
    }

    //Admin method
    deleteUser(user){
        users = users.filter((u) =>{
            return u.username !== user.username
        })
    }
}

//instance of the user class
const userOne = new User('mario','mario@mail.com');
const userTwo = new User('luigi','luigi@mail.com');
const userThree = new Admin('shaun','shaun@mail.com', 'admin-shaun');

console.log(userOne, userTwo, userThree);

//methods
let users = [userOne, userTwo, userThree];
console.log(users);

//method from Admin
userThree.deleteUser(userTwo);
console.log(users);