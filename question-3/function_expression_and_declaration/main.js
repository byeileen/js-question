
//function expression - not hoisted

let hello1 = function(){
    console.log("hello fx expression");

}

hello1();

// will be able to run since the declaration is hoisted
hello();

//function declaration - are always hoisted to the top
function hello(){
    console.log("hello you!");
}
// hello();