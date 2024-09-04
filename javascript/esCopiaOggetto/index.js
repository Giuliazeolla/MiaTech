const persona = {
    name: "Giulia",
    age: 23,
    work: "Cassiera",
}

const personaModificata = {
    ...persona,
    country: "Italia",
}

console.log(persona);
console.log(personaModificata);