/*
   	
       Stuff to handle ;-):
       1. Make the fields clickable (player0 uses "X", player1 "0")
       2. Keep track of all used fields (fieldsPlayed) and of the fields each player chose (fieldsPlayer0, fieldsPlayer1)
       3. Avoid that úsed fields can be played again and implement feedback like "Field already taken" (alert();)
       4. Check for winning combinations
       5. Implement feedback to the players (winning or game is a draw)
       6. End the game, avoid further playing
       7. Add a "Play again button"
       8. Implement "eternal" game statistics (using local storage!)
       9. Style the game as fancy and responsive as you can ;-)
   	
       */

// global game variables
let player, fields, fieldsPlayed, fieldsPlayer0, fieldsPlayer1, msg, playerA, playerB, playDraw;

player = 0;

fields = [];
fieldsPlayer0 = [];
fieldsPlayer1 = [];
msg = document.querySelector('#msg');
button = document.querySelector('#playAgain').addEventListener('click', playAgain);

fields = document.querySelectorAll("td");

playerA = 0;
playerB = 0;
playDraw = 0;

console.log(fields);

fieldsPlayed = [];

for (let i = 0; i < fields.length; i++) {
    fields[i].addEventListener('click', play);
}

function play() {
    // game core mechanics, marking the fields
    // console.log('you called me?');
    if (fieldsPlayed.includes(this.id)) {
        alert("no can do");
    }

    if (player === 0 && !fieldsPlayed.includes(this.id)) {
        this.innerHTML = 'X';
        this.style.color = "orange";
        fieldsPlayer0.push(parseInt(this.id));
        player = 1;
    } else if (player === 1 && !fieldsPlayed.includes(this.id)) {
        this.innerHTML = 'O';
        this.style.color = "red";
        fieldsPlayer1.push(parseInt(this.id));
        player = 0;
    } else {

    }

    fieldsPlayed.push(this.id);
    console.log(fieldsPlayed);
    win();
}


function win() {
    // analyzing field choices, winning conditions, feedback
    if (
        fieldsPlayer0.includes(1) && fieldsPlayer0.includes(2) && fieldsPlayer0.includes(3) ||
        fieldsPlayer0.includes(4) && fieldsPlayer0.includes(5) && fieldsPlayer0.includes(6) ||
        fieldsPlayer0.includes(7) && fieldsPlayer0.includes(8) && fieldsPlayer0.includes(9) ||
        fieldsPlayer0.includes(1) && fieldsPlayer0.includes(4) && fieldsPlayer0.includes(7) ||
        fieldsPlayer0.includes(2) && fieldsPlayer0.includes(8) && fieldsPlayer0.includes(5) ||
        fieldsPlayer0.includes(3) && fieldsPlayer0.includes(6) && fieldsPlayer0.includes(9) ||
        fieldsPlayer0.includes(1) && fieldsPlayer0.includes(5) && fieldsPlayer0.includes(9) ||
        fieldsPlayer0.includes(3) && fieldsPlayer0.includes(5) && fieldsPlayer0.includes(7)


    ) {
        msg.innerHTML = 'Player X won!';
        //For everytime player X wins, we add one point to it's counter
        playerA++;
        gameOver();
        gameStats();
    } else if (
        fieldsPlayer1.includes(1) && fieldsPlayer1.includes(2) && fieldsPlayer1.includes(3) ||
        fieldsPlayer1.includes(4) && fieldsPlayer1.includes(5) && fieldsPlayer1.includes(6) ||
        fieldsPlayer1.includes(7) && fieldsPlayer1.includes(8) && fieldsPlayer1.includes(9) ||
        fieldsPlayer1.includes(1) && fieldsPlayer1.includes(4) && fieldsPlayer1.includes(5) ||
        fieldsPlayer1.includes(2) && fieldsPlayer1.includes(5) && fieldsPlayer1.includes(8) ||
        fieldsPlayer1.includes(3) && fieldsPlayer1.includes(6) && fieldsPlayer1.includes(9) ||
        fieldsPlayer1.includes(1) && fieldsPlayer1.includes(5) && fieldsPlayer1.includes(9) ||
        fieldsPlayer1.includes(3) && fieldsPlayer1.includes(5) && fieldsPlayer1.includes(7)
    ) {
        msg.innerHTML = 'Player O won!';
        //For everytime player O wins, we add one point to it's counter
        playerB++;
        gameOver();
        gameStats();
    } else if (fieldsPlayed.length == 9) {
        msg.innerHTML = 'Draw!';
        //For everytime there's a draw, we add one point to it's counter
        playDraw++;
        gameOver();
        gameStats();
    }

}

function gameOver() {
    // ending the game 
    for (let i = 0; i < fields.length; i++) {
        fields[i].removeEventListener('click', play);
    }


}

function playAgain() {
    // restart the game
    //Btn with location reload or page refresh
    window.location.reload(true);
}

//Local storage, we get our stored item
localStorage.getItem('playerAStorage');
localStorage.getItem('playerBStorage');
localStorage.getItem('playDrawStorage');

if (localStorage.getItem('playerAStorage') !== 0) {
    //Convert from string to number
    playerA = Number(localStorage.getItem('playerAStorage'));
}

if (localStorage.getItem('playerBStorage') !== 0) {
    //Convert from string to number
    playerB = Number(localStorage.getItem('playerBStorage'));
}

if (localStorage.getItem('playDrawStorage') !== 0) {
    //Convert from string to number
    playDraw = Number(localStorage.getItem('playDrawStorage'));
}


//Display score in p-tag. We get the score from the localstorage to be inserted into the HTML p-tag
document.getElementById('player1Stats').innerHTML = 'Player A score: ' + Number(localStorage.getItem('playerAStorage'));
document.getElementById('player2Stats').innerHTML = 'Player B score: ' + Number(localStorage.getItem('playerBStorage'));
document.getElementById('playerDrawStats').innerHTML = 'DRAW score: ' + Number(localStorage.getItem('playDrawStorage'));

function gameStats() {
    // game stats using local storage
    //Store data in local storage
    localStorage.setItem('playerAStorage', playerA);
    localStorage.setItem('playerBStorage', playerB);
    localStorage.setItem('playDrawStorage', playDraw);

    //Convert from string to number
    localStorage.playerAStorage = Number(localStorage.playerAStorage);
    localStorage.playerBStorage = Number(localStorage.playerBStorage);
    localStorage.playDrawStorage = Number(localStorage.playDrawStorage);

    //Display in the p-tag. We get the score from the localstorage to be inserted into the HTML p-tag
    document.getElementById('player1Stats').innerHTML = 'Player A score: ' + localStorage.playerAStorage;
    document.getElementById('player2Stats').innerHTML = 'Player B score: ' + localStorage.playerBStorage;
    document.getElementById('playerDrawStats').innerHTML = 'DRAW score: ' + localStorage.playDrawStorage;

}