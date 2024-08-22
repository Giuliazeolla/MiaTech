let person = {
    name : "Giulia",
    age: 23,
    city: "Benevento"
}
console.log(person);

console.log(person.age);

person.age = 26;
console.log(person.age);

person.job = "Cassiera";
console.log(person.job);


for (key in person) {
    console.log("Nome della proprietà:" + key + ", " + "Valore:" + person[key]);
}