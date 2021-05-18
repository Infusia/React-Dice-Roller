diceRoll = numOfDice =>{
    let roll = [];
    let theSum = 0;
    let sides = 6;
    for(let i = 0; i<numOfDice; i++){
        roll[i]= Math.floor(Math.random() * sides + 1);
        theSum += roll[i];
    }
}