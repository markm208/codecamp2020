let fs = require('fs');

let names = ['Mark Mahoney', 'Laura Mahoney'];
let birthdates = ['3/19/1973', '11/1/1973'];

let allData = [];
for(let i = 0;i < names.length;i++) {
    let nameAndBirthdate = `${names[i]} ${birthdates[i]}`;
    allData.push(nameAndBirthdate);
}

fs.writeFileSync('names.txt', allData.join('\n'));
//fs.writeFileSync('names.txt', allData.join(''));

//run a couple of times to see old file is wiped out each time the program is run

let newNames = ['Buddy Mahoney', 'Patrick Mahoney'];
let newBirthdates = ['11/5/2004', '10/31/2007'];

//allData = [];
allData = [''];
for(let i = 0;i < newNames.length;i++) {
    let nameAndBirthdate = `${newNames[i]} ${newBirthdates[i]}`;
    allData.push(nameAndBirthdate);
}

fs.appendFileSync('names.txt', allData.join('\n'));


allData = fs.readFileSync('names.txt', 'utf8');
console.log(allData);
console.log();
console.log();


let people = allData.split('\n');
for(let i = 0;i < people.length;i++) {
    console.log('Person:');
    console.log(people[i]);
}
console.log();
console.log();

for(let i = 0;i < people.length;i++) {
    let person = people[i];
    let name = person.substring(0, person.lastIndexOf(' '));
    let bDay = person.substring(person.lastIndexOf(' ') + 1);

    console.log(`Name: ${name} Birthdate: ${bDay}`);
}
console.log();
console.log();




for(let i = 0;i < people.length;i++) {
    let person = people[i];
    let name = person.substring(0, person.lastIndexOf(' '));
    let bDay = person.substring(person.lastIndexOf(' ') + 1);

    let nameParts = name.split(' ');
    let firstName = nameParts[0];

    let dateParts = bDay.split('/');

    let today = new Date();
    let todaysYear = today.getFullYear();
    let personsBirthYear = Number(dateParts[2]);
    let ageThisYear = todaysYear - personsBirthYear;
    console.log(`${firstName} will turn ${ageThisYear} years old in ${todaysYear}`);
}
console.log();
console.log();

let bDayData = [];
for(let i = 0;i < people.length;i++) {
    let person = people[i];
    let name = person.substring(0, person.lastIndexOf(' '));
    let bDay = person.substring(person.lastIndexOf(' ') + 1);

    let nameParts = name.split(' ');
    let firstName = nameParts[0];

    let dateParts = bDay.split('/');

    let today = new Date();
    let todaysYear = today.getFullYear();
    let personsBirthYear = Number(dateParts[2]);
    let ageThisYear = todaysYear - personsBirthYear;
    let nameAndBDayData = `${firstName} will turn ${ageThisYear} years old in ${todaysYear}`;
    bDayData.push(nameAndBDayData);
}

fs.writeFileSync('namesAndBDays.txt', bDayData.join('\n'));
