// let counter = 1;
// while(true) {
//     console.log(`Counter: ${counter}`);
//     if(counter === 5) {
//         break;
//     }
//     counter++;
// }


// for(let row = 0;row < 10;row++) {
//     for(let col = 0;col < 10;col++) {
//         console.log(`${row}${col} `);
//     }
// }

// for(let row = 0;row < 10;row++) {
//     let line = '';
//     for(let col = 0;col < 10;col++) {
//         line = line + `${row}${col} `;
//     }
//     console.log(line);
// }

let grades = [];
grades.push([78.5, 96.0, 72.0]);
grades.push([81.0, 92.0, 82.0]);
grades.push([76.0, 84.0]);
grades.push([84.5]);

// console.log(grades[0][0]);
// console.log(grades[0][1]);
// console.log(grades[0][2]);
// console.log();

// console.log(grades[1][0]);
// console.log(grades[1][1]);
// console.log(grades[1][2]);
// console.log();

// console.log(grades[2][0]);
// console.log(grades[2][1]);
// console.log();

// console.log(grades[3][0]);
// console.log();

grades[3][0] = 100.0;
grades[3].push(100.0);
grades[3].push(100.0);
grades[3].push(100.0);
grades[3].push(100.0);

for(let row = 0;row < grades.length;row++) {
    console.log(`Student ${row + 1} Grades: `);
    for(let col = 0;col < grades[row].length;col++) {
        console.log(`Grade ${col + 1}: ${grades[row][col]}`);
    }
    console.log();
}