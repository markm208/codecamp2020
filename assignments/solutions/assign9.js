let salesPrice = 20.38;
let paymentAmount = 30.0;

let changeDueBack = paymentAmount - salesPrice;

let numHundreds = 0;
let numFifties = 0;
let numTwenties = 0;
let numTens = 0;
let numFives = 0;
let numOnes = 0;
let numHalfDollars = 0;
let numQuarters = 0;
let numDimes = 0;
let numNickels = 0;
let numPennies = 0;

if(paymentAmount >= salesPrice) {
    if(changeDueBack >= 100.0) {
        numHundreds++;
        changeDueBack = changeDueBack - 100.0;
    }

    if(changeDueBack >= 50.0) {
        numFifties++;
        changeDueBack = changeDueBack - 50.0;
    }

    if(changeDueBack >= 20.0) {
        numTwenties++;
        changeDueBack = changeDueBack - 20.0;
    }

    if(changeDueBack >= 20.0) {
        numTwenties++;
        changeDueBack = changeDueBack - 20.0;
    }

    if(changeDueBack >= 10.0) {
        numTens++;
        changeDueBack = changeDueBack - 10.0;
    }

    if(changeDueBack >= 5.0) {
        numFives++;
        changeDueBack = changeDueBack - 5.0;
    }

    if(changeDueBack >= 1.0) {
        numOnes++;
        changeDueBack = changeDueBack - 1.0;
    }

    if(changeDueBack >= 1.0) {
        numOnes++;
        changeDueBack = changeDueBack - 1.0;
    }

    if(changeDueBack >= 1.0) {
        numOnes++;
        changeDueBack = changeDueBack - 1.0;
    }

    if(changeDueBack >= 1.0) {
        numOnes++;
        changeDueBack = changeDueBack - 1.0;
    }

    if(changeDueBack >= .5) {
        numHalfDollars++;
        changeDueBack = changeDueBack - .50;
    }

    if(changeDueBack >= .25) {
        numQuarters++;
        changeDueBack = changeDueBack - .25;
    }

    if(changeDueBack >= .10) {
        numDimes++;
        changeDueBack = changeDueBack - .10;
    }

    if(changeDueBack >= .10) {
        numDimes++;
        changeDueBack = changeDueBack - .10;
    }

    if(changeDueBack >= .5) {
        numNickels++;
        changeDueBack = changeDueBack - .5;
    }

    if(changeDueBack >= .01) {
        numPennies++;
        changeDueBack = changeDueBack - .1;
    }

    if(changeDueBack >= .01) {
        numPennies++;
        changeDueBack = changeDueBack - .1;
    }

    if(changeDueBack >= .01) {
        numPennies++;
        changeDueBack = changeDueBack - .1;
    }
    
    if(changeDueBack >= .01) {
        numPennies++;
        changeDueBack = changeDueBack - .1;
    }

    if(changeDueBack >= .01) {
        numPennies++;
        changeDueBack = changeDueBack - .1;
    }

    console.log(`The change due back is $${changeDueBack.toFixed(2)}`);
    console.log();

    console.log(`${numHundreds} $100 Bills`);
    console.log(`${numFifties} $50 Bills`);
    console.log(`${numTwenties} $20 Bills`);
    console.log(`${numTens} $10 Bills`);
    console.log(`${numFives} $5 Bills`);
    console.log(`${numOnes} $1 Bills`);
    console.log(`${numHalfDollars} Half dollars`);
    console.log(`${numQuarters} Quarters`);
    console.log(`${numDimes} Dimes`);
    console.log(`${numNickels} Nickels`);
    console.log(`${numPennies} Pennies`);
} else {
    console.log(`You cannot but $${salesPrice} worth of goods with only $${paymentAmount}.`);
}