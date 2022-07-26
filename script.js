console.log("Hello Multiworld see");
// prompt('Whats good bruv');

// mk function, computerPlay, that randomly returns rock or paper or scissors for the computer
    let pScore = 0;
    let cScore = 0;

const resultsOne = document.createElement('div');
const resultsTwo = document.createElement('div');

function computerPlay (){
    randomNumber = Math.floor(Math.random()*3) + 1;

    switch (randomNumber){
        case 1:
            resultsOne.textContent = "CPU rockin out!";
            return "rock";
            break;
        case 2:
            resultsOne.textContent = "CPU making paper!";
            return "paper";
            break;
        case 3:
            resultsOne.textContent = "CPU cuttin it up!";
            return "scissors";
            break;
        default:
            resultsOne.textContent = "Does not compute, please try again :)";
            break;
    }

}

function playerPlay(){

    return prompt("What you sayin playa?").toLowerCase();
}
// mk funtion that play a single round of r/p/s

function playOneRound (pChoice, cChoice){


    if (cChoice == pChoice){
        resultsTwo.textContent = 'great minds think alike. So were you also thinking one more game?';
        resultsThree.textContent = `Score: \n P:${pScore} - C:${cScore}`;
    }
else if(cChoice == 'rock' && pChoice == 'scissors'){
    cScore++;
    resultsTwo.textContent = "Computer Blue!";
    resultsThree.textContent = `Score: \n P:${pScore} - C:${cScore}`;
    
}
else if (cChoice == 'rock' && pChoice == 'paper'){
    pScore++;
    resultsTwo.textContent = "the playa has played well!";
    resultsThree.textContent = `Score: \n P:${pScore} - C:${cScore}`;
}

else if (cChoice == "paper" && pChoice == "rock"){
    cScore++;
    resultsTwo.textContent = "the player has been Computed!";
    resultsThree.textContent = `Score: \n P:${pScore} - C:${cScore}`;
}
else if (cChoice == "paper" && pChoice == "scissors"){
    pScore++;
    resultsTwo.textContent = "the CPU got played!";
    resultsThree.textContent = `Score: \n P:${pScore} - C:${cScore}`;
}
else if (cChoice == "scissors" && pChoice == "rock"){
    pScore++;
    resultsTwo.textContent = "Player!";
    resultsThree.textContent = `Score: \n P:${pScore} - C:${cScore}`;
}
else if (cChoice == "scissors" && pChoice == "paper"){
    cScore++;
    resultsTwo.textContent = "The playa got GOT!";
    resultsThree.textContent = `Score: \n P:${pScore} - C:${cScore}`;
}

else if ((pChoice == 'rock') && (cChoice == 'scissors')){
    pScore++;
    resultsTwo.textContent = 'the playa has won!';
    resultsThree.textContent = `Score: \n P:${pScore} - C:${cScore}`;
}
else if (pChoice == "rock" && cChoice == 'paper'){
    cScore++;
    resultsTwo.textContent = 'the computer has defeated the player!';
    resultsThree.textContent = `Score: \n P:${pScore} - C:${cScore}`;
}
else if (pChoice == 'scissors' && cChoice == 'paper'){
    pScore++;
    resultsTwo.textContent = 'the player!';
    resultsThree.textContent = `Score: \n P:${pScore} - C:${cScore}`;

}
else if (pChoice == 'scissors' && cChoice == 'rock'){
    cScore++;
    resultsTwo.textContent = "Computer Blue!";
    resultsThree.textContent = `Score: \n P:${pScore} - C:${cScore}`;
}

else if (pChoice == 'paper' && cChoice == "scissors"){
    cScore++;
    resultsTwo.textContent = "compuTingalings!";
    resultsThree.textContent = `Score: \n P:${pScore} - C:${cScore}`;
}

else if (pChoice == 'paper' && cChoice == "rock"){
    pScore++;
    resultsTwo.textContent = "play on playa!";
    resultsThree.textContent = `Score: \n P:${pScore} - C:${cScore}`;
}

    else {
            alert('Something went wrong, let\'s run that back');
        }

        if (pScore == 5){
            resultsThree.textContent = `Score: \n P:${pScore} - C:${cScore}`;
            resultsTwo.textContent = `THE PLAYER HAS WON!`;
            alert('YOU WON! :) ');
            alert('Would you like to play another?');
            pScore = 0;
            cScore = 0
            resultsThree.textContent = `Score: \n P:${pScore} - C:${cScore}`;
           }
           else if (cScore == 5){
            resultsThree.textContent = `Score: \n P:${pScore} - C:${cScore}`;
            resultsTwo.textContent = `THE COMPUTER HAS WON!`;
            alert('YOU LOST :( ');
            alert('Would you like to play another?');
            pScore = 0;
            cScore = 0
            resultsThree.textContent = `Score: \n P:${pScore} - C:${cScore}`;
           }
    }


    console.log(cScore);
    // let compChoice = computerPlay();
    // let playerChoice = prompt("What you sayin playa?").toLowerCase();

// mk function, 2parameters, that takes playerchoice and compChoice, that plays single round and returns winner of round with message string

/// console.log(playOneRound(playerPlay(), computerPlay()));

// mk function, game, that calls playRound function, up to 5 times, keeps score and reports winner or loser

// function gameTime (){

//     for (i = 0; i < 5; i++){
//         playOneRound(playerPlay(), computerPlay());


//         alert(`the player has ${pScore} points`);
//         alert(`the computer has ${cScore} points`);
//         console.log(i);
//     }

//     if (pScore > cScore){

//         alert(`The player is victorious`);
//         alert(`...this time`);
//     }

//     else if (cScore > pScore){
//         alert (`The House remains undefeated`);
//         alert (`...for now`);
//     }
// else if (cScore == pScore){
//     alert (`Hmm this one looks like a draw`);
//     alert (`...Again!`);
// }

//     else {
//         alert (`Hmmm, we lost count somehow. Could we please try again?`);
//     }
    
// }

const resultsThree = document.createElement('div');
const buttonOne = document.createElement('button');
const buttonTwo = document.createElement('button');
const buttonThree = document.createElement('button');

buttonOne.textContent = "rock";
buttonTwo.textContent = "scissors";
buttonThree.textContent = "paper";
 

// buttonThree.addEventListener('click', playOneRound('paper', computerPlay));
buttonOne.addEventListener('click', function () {playOneRound('rock', computerPlay())});
buttonTwo.addEventListener('click', function () {playOneRound('scissors', computerPlay())});
buttonThree.addEventListener('click', function () {playOneRound('paper', computerPlay())});


resultsThree.textContent = `Score: \n P:${pScore} - C:${cScore}`;
document.body.appendChild(buttonOne);
document.body.appendChild(buttonTwo);
document.body.appendChild(buttonThree);
document.body.appendChild(resultsOne);
document.body.appendChild(resultsTwo);
document.body.appendChild(resultsThree);



// gameTime();

// console.log(playOneRound(playerPlay(), computerPlay()));
// alert(`the player has ${pScore} points`);
// alert(`the computer has ${cScore} points`);