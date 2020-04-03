import { generateComputerThrow } from './getRandomThrow.js';
import didWeWin from './didWeWin.js';

const playButton = document.getElementById('submit'); //getting the submit/playbutton
const resetButton = document.getElementById('reset'); //getting the reset button 
const compResult = document.getElementById('computerResult'); //the computer output
const winCount = document.getElementById('winSpan'); //getting the win output
const lossCount = document.getElementById('lossSpan'); //getting the loss output
const drawCount = document.getElementById('drawSpan'); //getting the draw output



//I know both buttons will need advent Listeners but I want to take it step by step
//I need to set some variables for the counters
let wins = 0;
let losses = 0;
let draw = 0;

//I am going to contruct my addeventlistener to playButton since i Now that need to be done
playButton.addEventListener('click', () => {
    const buttonChoice = document.querySelector('input[type=radio]:checked'); 
    //referred back to notes for input type
    let usersButtonChoice = buttonChoice.value; //buttonChoice.value is documet.querySelector
    //let userChoice = buttonChoice.value;
    let compChoice = generateComputerThrow();

    console.log(compChoice, usersButtonChoice); 

    const weWon = didWeWin(usersButtonChoice, compChoice); //I missed this step eariler and needed to write a did you
    //calculate if you've won
    
    //change state depedning win, loss, draw
    if (weWon === 'You Win!') {
        wins++;
    }
    else if (weWon === 'You Lose!') {
        losses++;
    }
    else {
        draw++;
    }
//outputting the text for wins, losses draws
    winCount.textContent = wins;
    lossCount.textContent = losses;
    drawCount.textContent = draw;
    compResult.text = compChoice;   //my code does not work. nooo!!!
});

resetButton.addEventListener('click', () => {
    return wins = 0, losses = 0, draw = 0;
    
});