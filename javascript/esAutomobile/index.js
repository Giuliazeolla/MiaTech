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

    _controllaChilometri(limite = 100000){
        if(this.km > limite) {
            return `ATTENZIONE! Il chilometraggio di ${this.km} km è al il limite massimo di ${limite} km`;
        }
    }

    #calcolaEtà(anno) {
        const annoC = new Date().getFullYear();
        return annoC - this.anno;
    }

    mostraEtà() {
        const età = this.#calcolaEtà();
        console.log(età);
    }
}

const macchina = new automobile("Audi", "A3", 2008, 250000, 500000);
macchina.mostraEtà();


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

    mostraAvvisoChilometraggio() {
        const avviso = this._controllaChilometri();
        return avviso;
    }
}
const autoElettrica = new elettrica("Tesla", "Model S", 2020, 300000, 300);
autoElettrica.mostraAvvisoChilometraggio();



automobile.prototype.saluta = function(marca, modello, anno, km, autonomia) {
    return `Ciao, questa è una ${this.marca} ${this.modello}!`;
}

