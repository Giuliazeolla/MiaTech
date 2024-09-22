// Funzione per salvare un valore nel localStorage e sessionStorage
function salvaValore(key, value) {
    localStorage.setItem(key, value);
    console.log(`Valore salvato in localStorage: ${key} = ${value}`);

    sessionStorage.setItem(key, value);
    console.log(`Valore salvato in sessionStorage: ${key} = ${value}`);
}

// Funzione per recuperare un valore dal localStorage e sessionStorage
function recuperaValore(key) {
    const valueLocal = localStorage.getItem(key);
    if (valueLocal) {
        console.log(`Valore recuperato da localStorage: ${key} = ${valueLocal}`);
    } else {
        console.log(`Nessun valore trovato in localStorage per la chiave: ${key}`);
    }

    const valueSession = sessionStorage.getItem(key);
    if (valueSession) {
        console.log(`Valore recuperato da sessionStorage: ${key} = ${valueSession}`);
    } else {
        console.log(`Nessun valore trovato in sessionStorage per la chiave: ${key}`);
    }

    return { valueLocal, valueSession };
}

// Funzione per rimuovere un valore dal localStorage e sessionStorage
function rimuoviValore(key) {
    localStorage.removeItem(key);
    console.log(`Valore rimosso da localStorage per la chiave: ${key}`);

    sessionStorage.removeItem(key);
    console.log(`Valore rimosso da sessionStorage per la chiave: ${key}`);
}

salvaValore('username', 'stellina');
recuperaValore('username');
rimuoviValore('username');
recuperaValore('username');