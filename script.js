const choices = ["rock", "paper", "scissors"]

function getComputerChoice(){
    let value = Math.floor(Math.random() * 3)
    return choices[value];
}

function playRound(playerChoice,computerChoice){
    computerChoice = computerChoice.toLowerCase();
    playerChoice = playerChoice.toLowerCase();
    if(playerChoice == computerChoice){
        return "Draw"
    }
    else if(playerChoice == "scissors"){
        if(computerChoice == "paper"){
            return "Win"
        }
        else{
            return "Lose"
        }
    }
    else if(playerChoice == "rock"){
        if(computerChoice == "scissors"){
            return "Win"
        }
        else{
            return "Lose"
        }
    }
    else if(playerChoice == "paper"){
        if(computerChoice == "stone"){
            return "Win"
        }
        else{
            return "Lose"
        }
    }
    else{
        return "That is not a valid option."
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
      let computerChoice = getComputerChoice();
      let match_result = playRound(button.id, computerChoice);
    });
  });


/* function match(){
    let playerCount = 0;
    let computerCount = 0;
    for(let i = 0; i < 5; i++){
        let playerChoice = prompt("Choose rock, paper or scissors");
        let computerChoice = getComputerChoice();
        console.log(computerChoice);
        let match_result = playRound(playerChoice, computerChoice);
        if(match_result == "Win"){
            playerCount += 1;
        }
        else if(match_result == "Lose"){
            computerCount += 1;
        }
        else{
            console.log("Draw")
        }
    }

    if(playerCount == computerCount){
        return "You played a draw"
    }
    else if (playerCount > computerCount){
        return "You won the match!"
    }
    else{
        return "You lost the match!"
    }
}

console.log(match()); */
