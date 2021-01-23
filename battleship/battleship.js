// Battleship variables

var location1 = 0;
var location2 = 1;
var location3 = 2;
var guess; 
var hits = 0;
var guesses = 0;
var isSunk = false;

// Battleship game

while (isSunk == false) {
    guess = prompt("Where would you like to shoot commander?(enter a number between 0-6):");
    if (guess < 0 || guess >6) {
        alert("Enter a valid number!");
    } else {
        guesses = guesses + 1;
    }
    if (guess == location1 || guess == location2 || guess == location3) {
        alert("HTTTTTTT!")
        hits = hits + 1;
        if (hits == 3) {
            isSunk = true;
            alert("The battle is over you win!")
        }
    } else {
        alert("HAHAHA!")
    }
}

//Results

var stats = "You took " + guesses + " guesses to sink our fleet, " + "which means your shot accuracy was " + (3/guesses);

alert(stats);
