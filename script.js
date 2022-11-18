const choices = ["rock", "paper", "scissors"]

function getComputerChoice(){
    let value = Math.floor(Math.random() * 3)
    document.getElementById("computer").innerHTML = "The computer chose " + choices[value] + "!";
    return choices[value];
}

function playRound(playerChoice,computerChoice){
    computerChoice = computerChoice.toLowerCase();
    playerChoice = playerChoice.toLowerCase();
    if(playerChoice == computerChoice){
        document.getElementById("wld").innerHTML = "It's a draw!";
        return "Draw"
    }
    else if(playerChoice == "scissors"){
        if(computerChoice == "paper"){
            document.getElementById("wld").innerHTML = "You won!";
            return "Win"
        }
        else{
            document.getElementById("wld").innerHTML = "You lost!";
            return "Lose"
        }
    }
    else if(playerChoice == "rock"){
        if(computerChoice == "scissors"){
            document.getElementById("wld").innerHTML = "You won!";
            return "Win"
        }
        else{
            document.getElementById("wld").innerHTML = "You lost!";
            return "Lose"
        }
    }
    else if(playerChoice == "paper"){
        if(computerChoice == "rock"){
            document.getElementById("wld").innerHTML = "You won!";
            return "Win"
        }
        else{
            document.getElementById("wld").innerHTML = "You lost!";
            return "Lose"
        }
    }
}

const buttons = document.querySelectorAll('button');

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        document.getElementById("player").innerHTML = "You chose " + button.id + "!";
      let computerChoice = getComputerChoice();
      let match_result = playRound(button.id, computerChoice);
      if(match_result == "Win"){
        playerScore = playerScore + 1;
        document.getElementById("playerScore").innerHTML = "Your score: " + playerScore.toString();
      }
      else if(match_result == "Lose"){
        computerScore = computerScore + 1;
        document.getElementById("computerScore").innerHTML = "The computer's score: " + computerScore.toString();
      }
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