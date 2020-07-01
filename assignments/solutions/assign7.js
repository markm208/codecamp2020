let firstMonth;
let firstDay;
let firstYear;

let secondMonth;
let secondDay;
let secondYear;

let firstComparedToSecond;

firstMonth = 11;
firstDay = 1;
firstYear = 1973;

secondMonth = 11;
secondDay = 1;
secondYear = 1973;

//if the first year comes before the second
if(firstYear < secondYear) {
    //month and day don't matter
    firstComparedToSecond = 'before';
} else if(firstYear > secondYear) {
    //month and day don't matter
    firstComparedToSecond = 'after';
} else { //years are the same check the months
    //if the first month comes before the second
    if(firstMonth < secondMonth) {
        //day doesn't matter
        firstComparedToSecond = 'before';
    } else if(firstMonth > secondMonth) {
        //day doesn't matter
        firstComparedToSecond = 'after';
    } else { //years and months are the same, check the day
        //if the day comes before, after, or is equal to
        if(firstDay < secondDay) {
            firstComparedToSecond = 'before';
        } else if(firstDay > secondDay) {
            firstComparedToSecond = 'after';
        } else {
            firstComparedToSecond = 'equal';
        }
    }    
}

//display both dates
console.log(`First month: ${firstMonth}`);
console.log(`First day: ${firstDay}`);
console.log(`First year: ${firstYear}`);
console.log(); //blank line
console.log(`Second month: ${secondMonth}`);
console.log(`Second day: ${secondDay}`);
console.log(`Second year: ${secondYear}`);

//print how the first date compares to the second
if(firstComparedToSecond === 'before') {
    console.log('The first date comes before the second.');
} else if(firstComparedToSecond === 'after'){
    console.log('The first date comes after the second.');
} else if(firstComparedToSecond === 'equal') {
    console.log('The first and second dates are the same.');
}