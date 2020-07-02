let studentGrade1 = 79.5;
let studentGrade2 = 84.0;
let studentGrade3 = 96.0;
//what if I have 30 students? 300 students?
//3,000,000 students (every student in America)
//I don't want to type all of these out!

//empty array
let grades = [];

grades.push(79.5);
grades.push(84.0);
grades.push(96.0);

//non-empty array
let names = ['Mark', 'Laura', 'Buddy', 'Patrick'];
console.log(names[0]);
console.log(names[1]); 
console.log(names[2]);
console.log(names[3]); 
console.log();

let lauraIndex = 1;
console.log(names[lauraIndex]); 
console.log();

if(names.length === 0) {
    console.log('The array is empty');
} else {
    console.log(`The array has ${names.length} elements in it`);
}

console.log(`The last element is: ${names[names.length - 1]}`);
console.log();

names[2] = 'Will';
names[lauraIndex] = 'Mom';

console.log(names[0]);
console.log(names[1]); 
console.log(names[2]);
console.log(names[3]); 
console.log();

let markIndex = names.indexOf('Mark');
console.log(`Mark can be found at index: ${markIndex}`);
console.log();

console.log(names.join('--'));
console.log();

names[6] = 'Willy';

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
console.log(names[5]);
console.log(names[6]);
console.log();

console.log(`The length of the array is: ${names.length}`);
names.pop();
names.pop();
names.pop();
console.log(`The length of the array is: ${names.length}`);
console.log();

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
console.log(names[5]);
console.log(names[6]);
console.log();

//use the starting position in the array and the number of elements to remove
names.splice(0, 2);
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log();