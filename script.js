// Define variables
let low = 1;
let high = 10;
var correct_num = Math.floor(Math.random() * 10) + 1;
var turns = 3;

function checkNumber() {
    while (turns > 0) {
        guess = prompt("Enter your guess here.");
        if (guess == correct_num) {
            alert("Congratulations, You won!");
            resetGame();
            break;
        } else if (isNaN(guess) || guess < 1 || guess > 10) {
            alert(`Enter a valid number between ${low} and ${high}`);
        }
        else if (guess < correct_num) {
            turns--;
            alert("Correct answer is greater. Turns remaining: " + turns);
        } else if (guess > correct_num) {
            turns--;
            alert("Correct answer is smaller. Turns remaining: " + turns);
        }
    }
    if (turns == 0)
        alert("You lose!. The number was " + correct_num + ".");
    resetGame();
}

function resetGame() {
    turns = 3;
    correct_num = Math.floor(Math.random() * 10) + 1;
}

function startGame() {
    checkNumber();
}