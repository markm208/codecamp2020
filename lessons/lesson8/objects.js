function printStudent(aStudent) {
    console.log(`${aStudent.lastName}, ${aStudent.firstName[0]}. GPA: ${aStudent.gpa}`); 
}

let student = {
    firstName: 'Mark',
    lastName: 'Mahoney',
    gpa: 2.7,
};

student.gpa = 3.1;

console.log(`First Name: ${student.firstName}`); 
console.log(`Last Name: ${student.lastName}`); 
console.log(`GPA: ${student.gpa}`); 

printStudent(student);

let courseRoster = [];
courseRoster.push(student);

let student2 = {
    firstName: 'Laura',
    lastName: 'Mahoney',
    gpa: 3.2,
};

let student3 = {
    firstName: 'Buddy',
    lastName: 'Mahoney',
    gpa: 3.9,
};

let student4 = {
    firstName: 'Patrick',
    lastName: 'Mahoney',
    gpa: 3.9,
};

courseRoster.push(student2);
courseRoster.push(student3);
courseRoster.push(student4);

for(let i = 0;i < courseRoster.length;i++) {
    printStudent(courseRoster[i]);
}

let anotherStudent = {
    name: {
        first: 'Mark',
        middle: 'Robert',
        last: 'Mahoney'
    },
    courses: ['CS101', 'CS102', 'MTH200'],
    gpa: 2.7
};

anotherStudent.courses.push('ENG101');

anotherStudent.gpa = 3.1;
anotherStudent['gpa'] = 3.1;

let propertyName = 'gpa';
anotherStudent[propertyName] = 3.2;

propertyName = 'courses';
anotherStudent[propertyName].push('PHY300');
//anotherStudent.propertyName.push('PHY300');

console.log(`${stanotherStudentudent.name.first} ${studeanotherStudentnt.name.last} has taken ${anotherStudent.courses.length} courses.`);

