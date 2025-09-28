function getComputerChoice(){
    const rand = parseInt(Math.random()*3);
    if (rand == 0) return "rock";
    else if (rand == 1) return "paper";
    else return "scissors";
}

function getHumanChoice(){
    let humanChoice= prompt("Rock, Paper, or Scissors? ");
    return humanChoice;
}

function playRound(humanChoice, compChoice) {
    if(humanChoice.toLowerCase() === "rock"){
        switch(compChoice.toLowerCase()){
            case "rock":
                console.log("Tie!");
                break;

            case "paper":
                console.log("Computer wins! Paper beats rock");
                compScore++;
                break;

            case "scissors":
                console.log("You win! Rock beats scissors");
                humanScore++;
                break;
            }
    }

    else if(humanChoice.toLowerCase() === "paper"){
        switch(compChoice.toLowerCase()){
            case "rock":
                console.log("You win! Paper beats rock");
                humanChoice++;
                break;

            case "paper":
                console.log("Tie!");
                break;

            case "scissors":
                console.log("Computer wins! Scissors beat paper");
                compScore++;
                break;
            }
    }

        else {
        switch(compChoice.toLowerCase()){
            case "rock":
                console.log("Computer wins! Rock beats scissors");
                compChoice++;
                break;

            case "paper":
                console.log("You win! Scissors beat paper");
                humanChoice++;
                break;

            case "scissors":
                console.log("Tie!")
                break;
            }
    }
}

let humanScore = 0;
let compScore = 0;


function playGame(){
    
    for (let i=0; i<5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (compScore > humanScore){
        console.log("Computer wins!");
    }
    else if (humanScore > compScore){
        console.log("You win!");
    }
    else console.log("It's a Tie!!");
}

playGame();