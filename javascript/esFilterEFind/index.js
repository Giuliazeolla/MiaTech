const students = [
    { name: 'Mario Rossi', grade: 85 },
    { name: 'Luigi Bianch', grade: 55 },
    { name: 'Giulia Verdi', grade: 72 },
    { name: 'Anna Neri', grade: 45 },
    { name: 'Paolo Gialli', grade: 90 }
];

const passedStudents = students.filter(student => student.grade >= 60);

const failedStudents = students.find(student => student.grade < 60);

console.log(passedStudents);
console.log(failedStudents);