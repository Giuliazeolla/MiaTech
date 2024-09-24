let form = document.querySelector("#formRegistrazione");

form.addEventListener("submit", function(event) {
    let nome = document.querySelector("#nome").value;
    let cognome = document.querySelector("#cognome").value;

    if (nome === "" || cognome === "") {
        alert("Compila tutti i campi prima di inviare il form.");
        event.preventDefault();
    } else {
        alert("Form inviato correttamente!");
    }
});