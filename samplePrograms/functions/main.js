// console.log('Hello ');

// function printName() {
//     console.log('Hello Mark Mahoney');
// }

// console.log('World!!!');
// printName();

// function printName(firstName, lastName) {
//     console.log(`Hello ${firstName} ${lastName}`);
// }

// printName('Mark', 'Mahoney');
// printName('Buddy', 'Mahoney');
// printName('Patrick', 'Mahoney');

// function printNames(allNames) {
//     for(let i = 0;i < allNames.length;i++) {
//         console.log(`Hello ${allNames[i]}`);
//     }
// }
// let names = ['Mark', 'Laura', 'Buddy', 'Patrick'];
// printNames(names);

// function averageNameLength(allNames) {
//     let retVal;
//     let totalLetters = 0;
//     for(let i = 0;i < allNames.length;i++) {
//         let currentName = allNames[i];
//         totalLetters = totalLetters + currentName.length;
//     }
//     retVal = totalLetters / allNames.length;
//     return retVal;
// }
// let names = ['Mark', 'Laura', 'Buddy', 'Patrick'];
// printNames(names);
// console.log(`Avg name length: ${averageNameLength(names)} letters`);


function printNames(allNames) {
    for(let i = 0;i < allNames.length;i++) {
        console.log(`Hello ${allNames[i]}`);
    }
    let avgNameLength = averageNameLength(allNames);
    console.log(`Average name length: ${avgNameLength} letters`);
}
function averageNameLength(allNames) {
    let retVal;
    let totalLetters = 0;
    for(let i = 0;i < allNames.length;i++) {
        let currentName = allNames[i];
        totalLetters = totalLetters + currentName.length;
    }
    retVal = totalLetters / allNames.length;
    return retVal;
}
let names = ['Mark', 'Laura', 'Buddy', 'Patrick', 'Willy'];
printNames(names);

