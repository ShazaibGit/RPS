function getComputerChoice () {
    let computerChoice = "";
    let x = Math.floor(Math.random() * 3) + 1;
    if (x === 1) {
        computerChoice = "rock";
    }
    else if (x === 2) {
        computerChoice = "paper";
    }
    else {
      computerChoice =  "scissors";
      
    }
    return computerChoice;
}



function getHumanChoice() {
   let userInput = prompt("Enter Rock paper or Scissors");

   let humanChoice = userInput.toLowerCase();

   return humanChoice;



    
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    
    if (humanChoice === computerChoice){
        console.log("it's a draw")
    }

    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock!!!");
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats paper!!!");
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You Lose! Paper beats Rock!!!");
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors!!!");
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats paper!!!");
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You Lose! rock beats scissors!!!");
        computerScore++;
    }

    console.log(`Your score is ${humanScore} and the score of opponent is ${computerScore}`);


    }

    function playGame (){
        i = 0;
        
        for (i=0;i<5;i++) {    
        playRound(getHumanChoice(),getComputerChoice())
        }
        
        if (humanScore > computerScore) {
            console.log("You win the game!!!")

        }
        else if ( humanScore< computerScore){
            console.log("you lose the game!")
        }
        else if (humanScore === computerScore){
            console.log("it is a draw!!!")
        }
   
    }
    