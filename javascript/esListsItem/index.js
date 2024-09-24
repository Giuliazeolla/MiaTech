document.querySelector("#creaLista").addEventListener("click", () => {
    let container = document.querySelector("#lista-container");
    let ul = document.createElement("ul");
    let elementiLista = ["Elemento 1", "Elemento 2", "Elemento 3", "Elemento 4", "Elemento 5"];
    for (let i = 0; i < elementiLista.length; i++) {
        let li = document.createElement("li"); 
        li.textContent = elementiLista[i];     
        ul.appendChild(li);                    
    }
    container.appendChild(ul);
});

____________