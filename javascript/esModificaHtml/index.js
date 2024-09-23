let paragrafo = document.querySelector("#testo");

document.querySelector("#aggiungiBottone").addEventListener("click", function() {
    paragrafo.innerHTML = 'Il testo è stato modificato. <button id="nuovoBottone">Nuovo Bottone</button>';
});