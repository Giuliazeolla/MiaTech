let titolo = document.querySelector("#titolo"); 
let descrizione = document.querySelector(".descrizione"); 

// Aggiunge un evento click al pulsante
document.querySelector("#modifica").addEventListener("click", () => {
    titolo.innerHTML = "Titolo Modificato!";
    descrizione.innerHTML = "Questo paragrafo è stato modificato tramite JavaScript.";
});