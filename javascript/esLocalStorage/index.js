const elementButton = document.getElementById("set-button");
const elementPizza = document.getElementById("pizza");

// funzione per salvare dati nel local storage
const saveToLocalStorage =  (key, value) => {
    localStorage.setItem(key, value);
    console.log(`Valore salvato nel local storage: ${key} = ${value}`);
}

const pizza = saveToLocalStorage("miaPizzaPreferita", "Margherita");

//funzione per recuperare dati dal local storage
const getFromLocalStorage = (key, value) => {
    const val = localStorage.getItem(key, value);
    if(value) {
        console.log(`Valore recuperato dal local storage: ${key} = ${value}`);
        return value;
    } else {
        console.log(`Nessun valore trovato nel local storage con la chiave ${key}`);
        return null;
    }
}

const valore = getFromLocalStorage("miaPizzaPreferita", "Margherita");

//funzione per eliminare un dato dal local storage

const  removeFromLocalStorage = (key) => {
    localStorage.removeItem(key);
    console.log(`Valore rimosso dal localStorage: ${key}`);
}

const remove = removeFromLocalStorage("miaPizzaPreferita");