const choices = ["rock", "paper", "scissors"]

function getComputerChoice(){
    let value = Math.floor(Math.random() * 3)
    return choices[value];
}

function game(playerChoice,computerChoice){
    if(playerChoice === computerChoice){
        return "Draw"
    }
    else if(playerChoice === "rock"){
        if(computerChoice === "scissors"){
            return "You won!"
        }
        else{
            return "You lost!"
        }
    }
    else if(playerChoice === "paper"){
        if(computerChoice === "rock"){
            return "You won!"
        }
        else{
            return "You lost!"
        }
        
    }
    else if(playerChoice === "scissors"){
        if(computerChoice === "paper"){
            return "You won!"
        }
        else{
            return "You lost!"
        }
    }
}