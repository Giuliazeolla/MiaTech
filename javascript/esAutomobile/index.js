class automobile {
    marca = ""
    modello = ""
    anno = 0

    constructor(marca, modello, anno) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
    }

    descrizione(automobile) {
        return `Descrizione automobile: ${this.marca}, ${this.modello}, ${this.anno}`;
    }
}
const macchina = new automobile("Audi", "A3", 2008);
