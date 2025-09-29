let humanScore = 0;
let compScore = 0;

const scoreDiv = document.getElementById("score")
const resultsDiv = document.getElementById("results")

document.getElementById("rock").addEventListener("click", ()=>playRound("rock"))
document.getElementById("paper").addEventListener("click", ()=>playRound("paper"))
document.getElementById("scissors").addEventListener("click", ()=>playRound("scissors"))

function getComputerChoice(){
    const rand = parseInt(Math.random()*3);
    if (rand == 0) return "rock";
    else if (rand == 1) return "paper";
    else return "scissors";
}

function playRound(humanChoice) {
    const compChoice = getComputerChoice();
    let result = ""
    ;
    if(humanChoice.toLowerCase() === "rock"){
        switch(compChoice.toLowerCase()){
            case "rock":
                result = "Tie!";
                break;

            case "paper":
                result = "Computer wins! Paper beats rock";
                compScore++;
                break;

            case "scissors":
                result = "You win! Rock beats scissors";
                humanScore++;
                break;
            }
    }

    else if(humanChoice.toLowerCase() === "paper"){
        switch(compChoice.toLowerCase()){
            case "rock":
                result = "You win! Paper beats rock";
                humanScore++;
                break;

            case "paper":
                result = "Tie!";
                break;

            case "scissors":
                result = "Computer wins! Scissors beat paper";
                compScore++;
                break;
            }
    }

        else {
        switch(compChoice.toLowerCase()){
            case "rock":
                result = "Computer wins! Rock beats scissors";
                compScore++;
                break;

            case "paper":
                result = "You win! Scissors beat paper";
                humanScore++;
                break;

            case "scissors":
                result = "Tie!"
                break;
            }
    }

    resultsDiv.textContent = result
    scoreDiv.textContent = `SCORE - You: ${humanScore} ||  Computer: ${compScore}`

    if (humanScore === 5) {
                resultsDiv.textContent = "🎉 YOU WIN THE GAME! 🎉";
                document.querySelectorAll('button').forEach(btn => btn.disabled = true);
    } else if (compScore === 5) {
                resultsDiv.textContent = "💻 COMPUTER WINS THE GAME! 💻";
                document.querySelectorAll('button').forEach(btn => btn.disabled = true);
    }
}




