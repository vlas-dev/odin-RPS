const options = ["rock","paper","scissors"];

function getComputerChoice(){
    const choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "Player";
    }
    else {
        return "Computer";
    } 
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie"){
        return "Tie!"
    }
    else if(result == "Player"){
        return `You win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`
    }
    else{
        return `You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`
    }

}

function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock, Paper or Scissors?")
        if(choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    } 
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    console.log("Welcome!");
    for (let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log("_____________________________")
        console.log(playRound(playerSelection, computerSelection));
        if(checkWinner(playerSelection, computerSelection) == "Player"){
            playerScore++;
        } 
        else if(checkWinner(playerSelection, computerSelection) == "Computer"){
            computerScore++;
        }
    }
    console.log("_____________________________")
    console.log("Game Over!")
    if(playerScore > computerScore){
        console.log("You win this round!")
    }
    else if(playerScore < computerScore){
        console.log("You lose this round!")

    }
    else{
        console.log("This round is a tie!")
    }

}

game();

//last version
//test
