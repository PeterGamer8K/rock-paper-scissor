const $ = document.querySelector.bind(document);
const DOMelements = {};
const game = {};


DOMelements.startBtn = $("#start-btn");
DOMelements.winnerP = $(".winner-p");
DOMelements.player1Img = $("#player1");
DOMelements.player2Img = $("#player2");

DOMelements.startBtn.focus();

DOMelements.startBtn.addEventListener('click', () => {
    startGame();
});

function startGame() {
    askTheUserNumber();
    getRandomNumber();
    analyseTheNumbers();
    showAnimations();
    showWinner();
}

function askTheUserNumber() {
    game.userNumber = parseInt(prompt("What do you want? 0 - rock; 1 - paper; 2 - scissor"));

    if (game.userNumber < 0 || game.userNumber > 2) {
        DOMelements.winnerP.classList.add("error");
        DOMelements.winnerP.textContent = "Your arbitrary have to be between 0 and 2";
        throw new Error("Your arbitrary have to be between 0 and 2");

    } else {

        DOMelements.winnerP.classList.remove("error");
    }
}

function getRandomNumber() {

    game.randomNumber = getRandomArbitrary(0, 3);



}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function analyseTheNumbers() {
    switch (game.userNumber) {
        case 0:
            if (game.randomNumber == 0) game.winner = 3;
            else if (game.randomNumber == 1) game.winner = 2;
            else if (game.randomNumber == 2) game.winner = 1;
            break;
        case 1:
            if (game.randomNumber == 0) game.winner = 1;
            else if (game.randomNumber == 1) game.winner = 3;
            else if (game.randomNumber == 2) game.winner = 2;
            break;
        case 2:
            if (game.randomNumber == 0) game.winner = 2;
            else if (game.randomNumber == 1) game.winner = 1;
            else if (game.randomNumber == 2) game.winner = 3;
            break;
    }
}

function showAnimations() {
    switch (game.userNumber) {
        case 0:
            DOMelements.player1Img.src = "./img/rock.png";
            break;
        case 1:
            DOMelements.player1Img.src = "./img/paper.png";
            break;
        case 2:
            DOMelements.player1Img.src = "./img/scissor.png";
            break;
    }
    switch (game.randomNumber) {
        case 0:
            DOMelements.player2Img.src = "./img/rock.png";
            break;
        case 1:
            DOMelements.player2Img.src = "./img/paper.png";
            break;
        case 2:
            DOMelements.player2Img.src = "./img/scissor.png";
            break;
    }
}

function showWinner() {
    DOMelements.winnerP.innerHTML = returnTheTextToShowInWinnerDiv();
}

function returnTheTextToShowInWinnerDiv() {
    if (game.winner == 1) {
        return "You win!";
    } else if (game.winner == 2) {
        return "You lose!";
    } else if (game.winner == 3) {
        return "No winner!";
    }
}