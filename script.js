console.log("Hello Multiworld see");
// prompt('Whats good bruv');

// mk function, computerPlay, that randomly returns rock or paper or scissors for the computer
    let pScore = 0;
    let cScore = 0;

function computerPlay (){
    randomNumber = Math.floor(Math.random()*3) + 1;

    switch (randomNumber){
        case 1:
            alert("CPU rockin out!")
            return "rock";
            break;
        case 2:
            alert("CPU making paper!")
            return "paper";
            break;
        case 3:
            alert("CPU cuttin it up!")
            return "scissors";
            break;
        default:
            alert("Does not compute, please try again :)");
            break;
    }

}

function playerPlay(){

    return prompt("What you sayin playa?").toLowerCase();
}
// mk funtion that play a single round of r/p/s

function playOneRound (pChoice, cChoice){
   

    if (cChoice == pChoice){
        alert('great minds think alike. So were you also thinking one more game?');
    }
else if(cChoice == 'rock' && pChoice == 'scissors'){
    cScore++;
    alert("Computer Blue!");
}
else if (cChoice == 'rock' && pChoice == 'paper'){
    pScore++;
    alert("the playa has played well!");
}

else if (cChoice == "paper" && pChoice == "rock"){
    cScore++;
    alert("the player has been Computed!");
}
else if (cChoice == "paper" && pChoice == "scissors"){
    pScore++;
    alert("the CPU got played!");
}
else if (cChoice == "scissors" && pChoice == "rock"){
    pScore++;
    alert("Player!");
}
else if (cChoice == "scissors" && pChoice == "paper"){
    cScore++;
    alert("The playa got GOT!");
}

else if ((pChoice == 'rock') && (cChoice == 'scissors')){
    pScore++;
    alert('the playa has won!');
}
else if (pChoice == "rock" && cChoice == 'paper'){
    cScore++;
    alert('the computer has defeated the player!');
}
else if (pChoice == 'scissors' && cChoice == 'paper'){
    pScore++;
    alert('the player!');

}
else if (pChoice == 'scissors' && cChoice == 'rock'){
    cScore++;
    alert("Computer Blue!");
}

else if (pChoice == 'paper' && cChoice == "scissors"){
    cScore++;
    alert("compuTingalings!");
}

else if (pChoice == 'paper' && cChoice == "rock"){
    pScore++;
    alert("play on playa!");
}

    else {
            alert('Something went wrong, let\'s run that back');
        }
    }

    // let compChoice = computerPlay();
    // let playerChoice = prompt("What you sayin playa?").toLowerCase();

// mk function, 2parameters, that takes playerchoice and compChoice, that plays single round and returns winner of round with message string

/// console.log(playOneRound(playerPlay(), computerPlay()));

// mk function, game, that calls playRound function, up to 5 times, keeps score and reports winner or loser

function gameTime (){

    for (i = 0; i < 5; i++){
        playOneRound(playerPlay(), computerPlay());


        alert(`the player has ${pScore} points`);
        alert(`the computer has ${cScore} points`);
        console.log(i);
    }

    if (pScore > cScore){

        alert(`The player is victorious`);
        alert(`...this time`);
    }

    else if (cScore > pScore){
        alert (`The House remains undefeated`);
        alert (`...for now`);
    }
else if (cScore == pScore){
    alert (`Hmm this one looks like a draw`);
    alert (`...Again!`);
}

    else {
        alert (`Hmmm, we lost count somehow. Could we please try again?`);
    }
    
}


gameTime();
// console.log(playOneRound(playerPlay(), computerPlay()));
// alert(`the player has ${pScore} points`);
// alert(`the computer has ${cScore} points`);