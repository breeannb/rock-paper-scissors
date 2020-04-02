import { generateComputerThrow } from '/.getRandomThrow.js/';

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

//did not follow directions, needs to be separate js page
//function generateComputerThrow(randomNumber) {
//    if (randomNumber === 0) {
//        return 'Rock';
//    } else if (randomNumber === 1) {
//        return 'Paper';  
//    } else { 
//        return 'Scissors';
//    }
//} 
//I will need to get numbers 0,1,2
//console.log(compNum);//it works
//I am going to contruct my addeventlistener to playButton since i Now that need to be done
playButton.addEventListener('click', () => {
    const buttonChoice = document.querySelector('input[type=radio]:checked'); //referred back to notes for input type
    //let userChoice = buttonChoice.value; //buttonChoice.value is documet.querySelector
    let UserChoice = buttonChoice.value;
    
    
    
    let computerChoice = generateComputerThrow;

    if (randomNumber === 0) {
        return 'Rock';
    } else if (randomNumber === 1) {
        return 'Paper';  
    } else { 
        return 'Scissors';
    }
});
    
 //   winCount.textContent = wins;
 //   lossCount.textContent = losses;
 //   drawCount.textContent = draw;
//});