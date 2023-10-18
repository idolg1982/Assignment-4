
let userChoice;
let computerChoice = Math.floor(Math.random() * 3) + 1;


alert(computerChoice);

do{
userChoice = prompt("User make a choice Rock, Paper, or Scissors").toLowerCase();
}while(userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors')


function computerChoiceSwitch(computerChoice){
    if (computerChoice === 0){
        return 'rock';
    }
    else if (computerChoice === 1){
        return 'paper'
    }
    else{ 
        return 'scissors'
    }
}

function Game(userChoice, switchedComputer){
    if(userChoice === 'rock' && switchedComputer === 'scissors'){
        return alert(`User choose ${userChoice} and computer choose ${switchedComputer}, user Wins!`);
    }
    else if(userChoice === 'paper' && switchedComputer === 'rock'){
        return alert(`User choose ${userChoice} and computer choose ${switchedComputer}, user Wins!`);
    }
    else if(userChoice === 'scissors' && switchedComputer === 'paper'){
        return alert(`User choose ${userChoice} and computer choose ${switchedComputer}, user Wins!`);
    }
    else if(userChoice === 'scissors' && switchedComputer === 'rock'){
        return alert(`User choose ${userChoice} and computer choose ${switchedComputer}, computer Wins!`);
    }
    else if(userChoice === 'rock' && switchedComputer === 'paper'){
        return alert(`User choose ${userChoice} and computer choose ${switchedComputer}, computer Wins!`);
    }
    else if(userChoice === 'paper' && switchedComputer === 'scissors'){
        return alert(`User choose ${userChoice} and computer choose ${switchedComputer}, computer Wins!`);
    }
    else{
        return alert(`User choose ${userChoice} and computer choose ${switchedComputer}, Tie Game!`)
    }

}

let switchedComputer = computerChoiceSwitch(computerChoice);
Game(userChoice, switchedComputer);
