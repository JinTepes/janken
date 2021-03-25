//intro~
console.log("script launched!")
//

//global variables
 let playerScore = 0;
 let computerScore = 0;
//

//functions
function computerHand(){
    //match decider
    if(playerScore == 5 || computerScore == 5){
        if(playerScore == 5){
            document.querySelector('#text-game-stats')
                .textContent = "YOU WIN THE MATCH ! !";
        }
        else{
            document.querySelector('#text-game-stats')
                .textContent = "YOU LOSE THE MATCH ! !";
        }
    }
    else{
        let hand = Math.floor((Math.random() * 3) + 1)

        let computerHimg = document.getElementById('img-computerhand');
    
        switch(hand){
            case 1:
                computerHimg.src = 'images/rock-hand.png'
                break;
            case 2:
                computerHimg.src = 'images/paper-hand.png'
                break;
            case 3:
                computerHimg.src = 'images/scissors-hand.png'
                break;
        }
    return hand;
    //1-rock 2-paper 3-scissor
    }
}

function matchDecider(){
    //match decider
    if(playerScore == 5 || computerScore == 5){
        if(playerScore == 5){
            document.querySelector('#text-game-stats')
                .textContent = "YOU WIN THE MATCH ! !";
        }
        else{
            document.querySelector('#text-game-stats')
                .textContent = "YOU LOSE THE MATCH ! !";
        }
    }
}

function play(ph, ch){
    //match decider
    if(playerScore == 5 || computerScore == 5){
        if(playerScore == 5){
            document.querySelector('#text-game-stats')
                .textContent = "YOU WIN THE MATCH ! !";
        }
        else{
            document.querySelector('#text-game-stats')
                .textContent = "YOU LOSE THE MATCH ! !";
        }
    }
    else{
        //player hand image change
        let playerHimg = document.getElementById('img-playerhand');
        switch(ph){
            case 1:
                playerHimg.src = 'images/rock-hand.png'
                break;
    
            case 2:
                playerHimg.src = 'images/paper-hand.png'
                break;
            case 3:
                playerHimg.src = 'images/scissors-hand.png'
                break;
        }

        switch(ch){
            case 1:
                if(ph == 2){
                    playerScore = playerScore + 1;
                    //adding player score
                    document.querySelector('#plc-var')
                    .textContent = "Your Score: " + String(playerScore);
                    //
                    //win message
                    document.querySelector('#text-game-stats')
                    .textContent = "ROUND WON ! !";
                }
                else if(ph == 3){
                    computerScore = computerScore + 1;
                    //adding computer score
                    document.querySelector('#clc-var')
                    .textContent = "Computer Score: " + String(computerScore);
                    //
                    //lose message
                    document.querySelector('#text-game-stats')
                    .textContent = "ROUND LOST ! !";
                }
                else{
                    //draw message
                    document.querySelector('#text-game-stats')
                    .textContent = "ROUND DRAW ! !";
                }
                break;
            
                case 2:
                if(ph == 3){
                    playerScore = playerScore + 1;
                    //adding player score
                    document.querySelector('#plc-var')
                    .textContent = "Your Score: " + String(playerScore);
                    //
                    //win message
                    document.querySelector('#text-game-stats')
                    .textContent = "ROUND WON ! !";
                }
                else if(ph == 1){
                    computerScore = computerScore + 1;
                    //adding computer score
                    document.querySelector('#clc-var')
                    .textContent = "Computer Score: " + String(computerScore);
                    //
                    //lose message
                    document.querySelector('#text-game-stats')
                    .textContent = "ROUND LOST ! !";
                }
                else{
                    //draw message
                    document.querySelector('#text-game-stats')
                    .textContent = "ROUND DRAW ! !";
                }
                break;
    
                case 3:
                if(ph == 1){
                    playerScore = playerScore + 1;
                    //adding player score
                    document.querySelector('#plc-var')
                    .textContent = "Your Score: " + String(playerScore);
                    //
                    //win message
                    document.querySelector('#text-game-stats')
                    .textContent = "ROUND WON ! !";
                }
                else if(ph == 2){
                    computerScore = computerScore + 1;
                    //adding computer score
                    document.querySelector('#clc-var')
                    .textContent = "Computer Score: " + String(computerScore);
                    //
                    //lose message
                    document.querySelector('#text-game-stats')
                    .textContent = "ROUND LOST ! !";
                }
                else{
                    //draw message
                    document.querySelector('#text-game-stats')
                    .textContent = "ROUND DRAW ! !";
                }
                break;
        }
        //match decider
        if(playerScore == 5 || computerScore == 5){
            if(playerScore == 5){
                document.querySelector('#text-game-stats')
                    .textContent = "YOU WIN THE MATCH ! !";
            }
            else{
                document.querySelector('#text-game-stats')
                    .textContent = "YOU LOSE THE MATCH ! !";
            }
        }
    }
    
}

function rockClick(){
    //fight scene
    play(1,computerHand());
}

function paperClick(){
    //fight scene
    play(2,computerHand());
}

function scissorsClick(){
    //fight scene
    play(3,computerHand());
}

function resetClick(){
    playerScore = 0;
    computerScore = 0;

    //reseting player score
    document.querySelector('#plc-var')
    .textContent = "Your Score: " + String(playerScore);
    //

    //reseting computer score
    document.querySelector('#clc-var')
    .textContent = "Computer Score: " + String(computerScore);
    //
    //reseting message
    document.querySelector('#text-game-stats')
    .textContent = "GAME START!";
}