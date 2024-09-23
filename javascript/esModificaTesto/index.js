let paragrafo = document.querySelector("#testo");

document.querySelector("#cambiaTesto").addEventListener("click", function() {
    paragrafo.innerText = "Il testo è stato modificato tramite JavaScript!";
});