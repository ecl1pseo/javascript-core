//user decides whether start a game
let startGame = confirm("Do you want to play a game?");

//options
let totalPrize = 0;
let prizeСoefficient = 1;
let rangeCoefficient = 1;

decideToPlay();

//decideToPlay-block; user decides whether continue a game
function decideToPlay() {
    if (!startGame) {
        alert("You didn't become a millionaire!!!");
    }
    while (startGame) {
        let winRound = playGame(prizeСoefficient, rangeCoefficient);
        if (winRound) {
            totalPrize += winRound;
            let wantToContinue = confirm("Do you want to continue a game?");
            if (wantToContinue) {
                prizeСoefficient *= 3;
                rangeCoefficient *= 2;
            }
            else {
                endGame();
                wantToContinue = confirm("Do you want to start new game?");
                if (wantToContinue) {
                    continue;
                }
                else {
                    break;
                }
            }
        }
        else {
            endGame();
            startGame = confirm("Do you want to play again?");
        }
    }
}


//Guessing game
function playGame(prizeСoefficient, rangeCoefficient) {
    let possiblePrize = 10;
    let min = 0 * rangeCoefficient;
    let max = 5 * rangeCoefficient;
    let randomNumber = generateNumber(min, max);
    let prizes = {
        2: possiblePrize * prizeСoefficient,
        1: Math.floor((possiblePrize / 2) * prizeСoefficient),
        0: Math.floor((possiblePrize / 4) * prizeСoefficient)
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
    totalPrize = 0;
    prizeСoefficient = 1;
    rangeCoefficient = 1;
}

//generate random number between min and max
function generateNumber(min, max) {
    generatedNumber = Math.floor(min + Math.random() * (max - min + 1));
    console.log(generatedNumber);
    return generatedNumber;
}