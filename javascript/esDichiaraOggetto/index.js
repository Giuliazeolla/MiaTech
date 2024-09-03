const person = {
    name: "Emanuele",
    age: 23
}

const { name, age, work = "non specificato", country = "non specificato" } = person;

console.log(name);
console.log(age);
console.log(work);
console.log(country);