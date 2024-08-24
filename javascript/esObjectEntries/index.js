let student = {
    name : "Sara",
    age : 14,
    grade : "B",
    school: "Liceo Scientifico" 
};

const entries = Object.entries(student);
console.log(entries);

for(const [key, value] of entries) {
     console.log(`${key}: ${value}`);  
}

