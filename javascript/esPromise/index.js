function restituisciPromessa() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promessa risolta dopo 2 secondi!");
        }, 2000); 
    });
}

restituisciPromessa().then((messaggio) => {
    console.log(messaggio); 
});