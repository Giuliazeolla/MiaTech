let word;
console.log(word.length);

do {
    word = prompt('Inserisci una parola');
} while (word.length <= 5);
console.log(word);