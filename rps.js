game();


function getComputerSelection() {
    const choices = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function play(playerSelection, computerSelection) {

    switch (playerSelection) {
        case 'rock':
            return computerSelection == 'rock' ? ['tie', 'Tie!'] :
                computerSelection == 'paper' ? ['computer', 'You Lose!\nPaper beats Rock'] :
                    ['player', 'You Win!\nRock beats Scissors'];

        case 'paper':
            return computerSelection == 'rock' ? ['player', 'You Win!\nPaper beats Rock'] :
                computerSelection == 'paper' ? ['tie', 'Tie!'] :
                    ['computer', 'You Lose!\nScissors beat Paper'];

        default:
            return computerSelection == 'rock' ? ['computer', 'You Lose!\nRock beats Scissors'] :
                computerSelection == 'paper' ? ['player', 'You Win!\nScissors beat Paper'] :
                    ['tie', 'Tie!'];
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    let playerSelection = null;
    let gameStatus = null;
    let winner = null;
    let message = null;
    const resultNode = document.querySelector('.result p');

    updateScores();


    document.querySelectorAll(".user-selection button").forEach(btn => btn.addEventListener(
        'click', () => {
            playerSelection = btn.className;
            gameStatus = play(playerSelection, getComputerSelection());
            winner = gameStatus[0];
            message = gameStatus[1];

            resultNode.textContent = message;

            switch (winner) {
                case 'computer':
                    computerScore++;
                    break;
                case 'player':
                    playerScore++;
                    break;
            }

            updateScores();
        }
    ));



    function updateScores() {
        const playerScoreNode = document.querySelector('h2.player');
        const computerScoreNode = document.querySelector('h2.computer');
        playerScoreNode.textContent = `You: ${playerScore}`;
        computerScoreNode.textContent = `Computer: ${computerScore}`;
    }
}
