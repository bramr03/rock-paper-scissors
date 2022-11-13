const choices = ["rock", "paper", "scissors"]

function getComputerChoice(){
    let value = Math.floor(Math.random() * 3)
    return choices[value];
}

function game(playerChoice,computerChoice){
    if(playerChoice === computerChoice){
        console.log("Draw")
    }
    else if(playerChoice === "rock"){
        if(computerChoice === "scissors"){
            console.log("You won!")
        }
        else{
            console.log("You lost!")
        }
    }
    else if(playerChoice === "paper"){
        if(computerChoice === "rock"){
            console.log("You won!")
        }
        else{
            console.log("You lost!")
        }
        
    }
    else if(playerChoice === "scissors"){
        if(computerChoice === "paper"){
            console.log("You won!")
        }
        else{
            console.log("You lost!")
        }
    }
}