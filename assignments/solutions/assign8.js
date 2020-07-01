let age1;
let age2;

age1 = 20;
age2 = 30;

//if both are 16 or over
if(age1 >= 16 && age2 >= 16) {
    console.log('Both can drive');
}

//if at least one (maybe both) are 21 or over
if(age1 >= 21 || age2 >= 21) {
    console.log('At least one can buy alcohol');
}

//if exactly one is 25 or over and the other isn't 
if((age1 >= 25 && age2 < 25) || (age1 < 25 && age2 >= 25)) {
    console.log('One can be a senator');
}

//if both are under 35
if(age1 < 35 && age2 < 35) {
    console.log('Neither can become President');
}