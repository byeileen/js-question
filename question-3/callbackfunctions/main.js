// Callback function
//A callback function - is a parameter inside another function

let start = function(){
    console.log("I am a callback function");
}

let callBackEx = function(callback){

    callback();
}

callBackEx(start);

