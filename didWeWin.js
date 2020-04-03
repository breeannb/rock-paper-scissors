export default function didWeWin(userSelection, computerSelection) {///not really sure what Im trying here.
    if (userSelection === computerSelection) {
        return 'Draw!';
    } else if (userSelection === 'rock' && computerSelection === 'paper') {
        return 'You Lose!'; 
    } else if (userSelection === 'rock' && computerSelection === 'scissor') {
        return 'You Win!';
    } else if (userSelection === 'paper' && computerSelection === 'scissor') {
        return 'You Win!'; 
    } else if (userSelection === 'paper' && computerSelection === 'rock') {
        return 'You Win!'; 
    } else if (userSelection === 'scissor' && computerSelection === 'paper') {
        return 'You Win!'; 
    } else if (userSelection === 'scissor' && computerSelection === 'rock') {
        return 'You Lose!';
    }
}  
