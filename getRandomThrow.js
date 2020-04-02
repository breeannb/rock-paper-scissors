function generateComputerThrow(randomNumber) {
    if (randomNumber === 0) {
        return 'Rock';
    } else if (randomNumber === 1) {
        return 'Paper';  
    } else { 
        return 'Scissors';
    }
}
export generateComputerThrow;