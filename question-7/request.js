//making the request object
const request = new XMLHttpRequest();

//STEP 2 get the states of the request.
//use an eventlistener to track the progress and states of the request
//ready.state tells us the state the request is currently in, there are 4
request.addEventListener('readystatechange',() =>{
    console.log(request, request.readyState);
    //to check if the request is in state 4
    if(request.readyState === 4){
        //console logs the data the response holds, which is stored in responseText
        console.log(request.responseText);
    }
});

//STEP 1 set up the request
//using the method open(), first argument the the type of request we want to send. GET gets data
//the second argument is where we want to make the request to - the API endpoint
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
//Using the method send() to send the request
request.send();

