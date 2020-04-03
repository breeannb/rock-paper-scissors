export function generateComputerThrow(){
    let number = Math.floor(Math.random() * 3); //had to google this
    //need to change the number to a word value
    let wordOption = ['rock', 'paper', 'scissor'];//had to google
    let compChoice = wordOption[number];//had Hunter explain this to me...I'm very lost.
    return compChoice;
}
