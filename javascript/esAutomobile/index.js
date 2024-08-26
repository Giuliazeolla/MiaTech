class automobile {
    marca = ""
    modello = ""
    anno = 0
    km = 0

    constructor(marca, modello, anno) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
    }

    descrizione(automobile) {
        return `Descrizione automobile: ${this.marca}, ${this.modello}, ${this.anno}`;
    }

    aggiungiChilometri(km) {
        this.km ++;
    }

    mostraChilometraggio(km) {
        return aggiungiChilometri();
    }
}

class elettrica extends automobile {
    autonomia = 0 

    constructor(marca, modello, anno, km, autonomia) {
        super(marca, modello, anno, km);
        this.autonomia = autonomia;
    }

    descrizione(automobile) {
        return `Descrizione automobile: ${this.marca}, ${this.modello}, ${this.anno}, ${this.km}, ${this.autonomia}`;
    }

    ricarica(km) {
        this.autonomia ++;
    }
}

automobile.prototype.saluta = function(marca, modello, anno, km, autonomia) {
    return `Ciao, questa è una ${this.marca} ${this.modello}!`;
}

const macchina = new automobile("Audi", "A3", 2008, 250.000, 500.000);