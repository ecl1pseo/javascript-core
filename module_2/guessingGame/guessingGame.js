//user decides whether start a game
let startGame = confirm("Do you want to play a game?");

//options
let totalPrize = 0;
let prizeСoefficient = 1;
let rangeCoefficient = 1;
let possiblePrize = 10;

main();
endGame();

//main-block; user decides whether continue a game
function main() {
    while (startGame) {
        let winRound = playGame(prizeСoefficient, rangeCoefficient);
        if (winRound) {
            totalPrize += winRound;
            let wantToContinue = prompt("Do you want to play again?", "Yes");
            if (wantToContinue) {
                prizeСoefficient *= 3;
                rangeCoefficient *= 2;
            }
            else {
                break;
            }
        }
        else {
            startGame = confirm("Do you want to play again?", "Yes");
            if (startGame) {
                prizeСoefficient = 1;
                rangeCoefficient = 1;
            }
        }
    }
}


//Guessing game
function playGame(prizeСoefficient, rangeCoefficient) {
    let min = 0 * rangeCoefficient;
    let max = 5 * rangeCoefficient;
    let randomNumber = generateNumber(min, max);
    let prizes = {
        2: possiblePrize * prizeСoefficient,
        1: Math.floor(possiblePrize / 2) * prizeСoefficient,
        0: Math.floor(possiblePrize / 4) * prizeСoefficient
    };
    let attempts = 3;
    while (attempts) {
        attempts--;
        let userNumber = +prompt(`
        Enter a number from ${min} to ${max}
        Attempts left: ${attempts + 1}
        Total prize: ${totalPrize}
        Possible prize on current attempt: ${prizes[attempts]}`);
        if (randomNumber === userNumber) {
            return prizes[attempts];
        }
        else if (userNumber == undefined) {
            return 0;
        }
    }
    return 0;
}

//if user decides to stop a game
function endGame() {
    if (totalPrize) {
        console.log(`Thanks for a game. Your prize is: ${totalPrize}`);
    }
    else {
        console.log("Sorry, you didn't win anything");
    }
}

//generate random number between min and max
function generateNumber(min, max) {
    generatedNumber = Math.floor(min + Math.random() * (max - min + 1));
    console.log(generatedNumber);
    return generatedNumber;
}