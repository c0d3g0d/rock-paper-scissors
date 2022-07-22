document.querySelectorAll(".user-selection button").forEach(btn => btn.addEventListener(
    'click', () => console.log(play(btn.className, getComputerSelection()))
));




function getComputerSelection()
        {
            const choices = ['rock', 'paper', 'scissors'];
            let choice = Math.floor(Math.random() * 3);
            return choices[choice];
        }

        function play(playerSelection, computerSelection)
        {

            switch (playerSelection)
            {
                case 'rock':
                    return computerSelection == 'rock' ? ['tie', 'Tie!'] : 
                         computerSelection == 'paper' ? ['computer','You Lose!\nPaper beats Rock'] :
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

        function game()
        {
            let playerScore = 0;
            let computerScore = 0;

            for (let i = 0; i < 5; i++)
            {
                console.log(i < 4 ? `Round ${i+1}` : 'Final Round');

                let playerSelection = prompt(`Your choice: `, "rock");
                if (!isValid(playerSelection))
                    return;
                playerSelection = playerSelection.toLowerCase();
                while (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors')
                {
                    playerSelection = prompt("Invalid Choice: ", "rock");
                    if (!isValid(playerSelection))
                        return;

                    playerSelection = playerSelection.toLowerCase();
                }

                const gameStatus = play(playerSelection, getComputerSelection());
                const winner = gameStatus[0];
                const message = gameStatus[1];
                console.log(message);

                switch (winner)
                {
                    case 'computer':
                        computerScore++;
                        break;
                    case 'player':
                        playerScore++;
                        break;
                }
            }

            console.log("RESULTS:");

            if (computerScore > playerScore)
            {
                console.log("You Lose!")
                console.log(`You: ${playerScore} Computer: ${computerScore}`);
            }
            else if (playerScore > computerScore)
            {
                console.log("You Win!")
                console.log(`You: ${playerScore} Computer: ${computerScore}`);
            }
            else {
                console.log("It was a tie!")
                console.log(`You: ${playerScore} Computer: ${computerScore}`);
            }
        }

        function isValid (playerInput)
        {
            if (!playerInput){
                console.log('Canceled');
                return false;
            }
            
            return true;
        }