var playGame = window.confirm("Would you like to play Rock, Paper, Scissors?")

if (playGame) {
    rockPaperScissors()
}

var playerScore = 0;
var computerScore = 0;

function rockPaperScissors() {
    player = window.prompt("Please type rock, paper, or scissors for your selection.");
    // console.log(player);
    // while (player.toLowerCase != "rock" || player.toLowerCase != "paper" || player.toLowerCase != "scissors") {
    //     player = window.prompt("Not a valid input, please choose either rock, paper, or scissors.")
    // }
    computerMath = Math.floor(Math.random() * 3);
    // console.log(computerMath);
    if (computerMath === 0) {
        computer = "rock";
    } else if (computerMath === 1) {
        computer = "paper";
    } else if (computerMath === 2) {
        computer = "scissors";
    }

    ties = 0;
    computerScore = 0;
    playerScore = 0;

    player = player.toLowerCase();
    computer = computer.toLowerCase();
    
    if(player === computer){
        winnerMsg = "You Tied."
        ties++;
    }

    else if(player == 'rock'){
        if(computer == 'paper'){
            winnerMsg = "Computer Won.";
            computerScore++;
        }else{
            winnerMsg = "You Won.";
            playerScore++;
        }
    }

    else if(player == 'scissors'){
        if(computer == 'rock'){
            winnerMsg = "Computer Won.";;
            computerScore++;
        }else{
            winnerMsg = "You Won.";
            playerScore++;
        }
    }

    else if(player == 'paper'){
        if(computer == 'scissors'){
            winnerMsg = "Computer Won.";;
            computerScore++;
        }else{
            winnerMsg = "You Won.";
            playerScore++;
        }
    }
}

// var playAgain = window.confirm("You picked " + player + ", the computer picked " + computer + ". " + winnerMsg + " Play Again?") 
//     if (playAgain) {
//         rockPaperScissors()
//     }

// console.log(computerScore);
// console.log(playerScore);

// var playerScore = 0;
// var computerScore = 0;

// var winner = (player, computer) => {
//     player = player.toLowerCase();
//     computer = computer.toLowerCase();
//     if(player === computer){
//         console.log('Tie')
//     }
//     else if(player == 'rock'){
//         if(computer == 'paper'){
//             console.log('Computer Won');
//             computerScore++;

//         }else{
//             console.log('Player Won')
//             playerScore++;
//         }
//     }
//     else if(player == 'scissors'){
//         if(computer == 'rock'){
//             console.log('Computer Won');
//             computerScore++;
//         }else{
//             console.log('Player Won');
//             playerScore++;
//         }
//     }
//     else if(player == 'paper'){
//         if(computer == 'scissors'){
//             console.log('Computer Won');
//             computerScore++;
//         }else{
//             console.log('Player Won');
//             playerScore++;
//         }
//     }
// }

// console.log(playerScore);
// console.log(computerScore);
