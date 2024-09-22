const saveToSS =  (key, value) => {
    sessionStorage.setItem(key, value);
    console.log(`Valore salvato nel local storage: ${key} = ${value}`);
}

const pizza = saveToSS("miaPizzaPreferita", "Margherita");

//funzione per recuperare dati dal session storage
const getFromSS = (key, value) => {
    sessionStorage.getItem(key, value);
    if(value) {
        console.log(`Valore recuperato dal local storage: ${key} = ${value}`);
        return value;
    } else {
        console.log(`Nessun valore trovato nel local storage con la chiave ${key}`);
        return null;
    }
}

const valore = getFromSS("miaPizzaPreferita", "Margherita");

//funzione per eliminare un dato dal session storage

const  removeFromSS = (key) => {
    sessionStorage.removeItem(key);
    console.log(`Valore rimosso dal localStorage: ${key}`);
}

const remove = removeFromSS("miaPizzaPreferita");