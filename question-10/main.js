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
//instance of the user class
const userOne = new User('mario','mario@mail.com');
const userTwo = new User('luigi','luigi@mail.com');

console.log(userOne,userTwo);

//method 
userOne.logout();
userTwo.logout();

//method chaining 
userOne.login().inScore().inScore().logout();
