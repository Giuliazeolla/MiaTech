class automobile {
    marca = ""
    modello = ""
    anno = 0
    km = 0
    #contatoreChimate = 0

    constructor(marca, modello, anno, km) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.km = km;
    }

    descrizione(automobile) {
        return `Descrizione automobile: ${this.marca}, ${this.modello}, ${this.anno}`;
    }

    aggiungiChilometri(km) {
        this.km += km;
        this.#contatoreChimate++;
        return this.#contatoreChimate;
    }

    mostraChilometraggio(km) {
        return aggiungiChilometri();
    }

    _controllaChilometri(limite = 100000){
        if(this.km > limite) {
            return `ATTENZIONE! Il chilometraggio di ${this.km} km è al il limite massimo di ${limite} km`;
        }
    }

    mostraAvvisoChilometraggio(limite = 100000) {
        const avviso = this._controllaChilometri(limite);
        return avviso;
    }

    static confrontaChilometraggio(macchina, macchina2) {
        if(macchina.km > macchina2.km) {
            return `L' ${macchina.marca} ha un chilometraggio di ${macchina.km} che è maggiore della ${macchina2.marca}`;
        } else if(macchina.km < macchina2.km) {
            return `La ${macchina2.marca} ha un chilometraggio di ${macchina2.km} che è maggiore dell' ${macchina.marca}`;
        } else {
            return `La prima auto e la seconda auto hanno lo stesso numero di chilometri`;
        }
    }

    #incrementaContatore() {
        this.#contatoreChimate++;
    }

    /*Al posto di aggiungiChilometri utilizzo un nome diverso perchè già esistente*/
    esegui() {
        let esegui = this.#incrementaContatore();
        console.log(`Contatore chiamate: ${this.#contatoreChimate}`);
    }

    monstraContatoreChiamate() {
        return macchina.esegui();
    }

    get km() {
        return this.km;
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

const macchina = new automobile("Audi", "A3", 2008, 250000, 500);
const macchina2 = new automobile("Volkswagen", "Polo", 2016, 175000, 400)
macchina.mostraEtà();
console.log(automobile.confrontaChilometraggio(macchina, macchina2));
console.log(macchina.aggiungiChilometri(macchina.km)); //Numero di chiamate del contatore 
macchina.esegui();
macchina.esegui();
macchina.monstraContatoreChiamate();
console.log(macchina2.km);



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
        this.autonomia += autonomia;
    }
}
const autoElettrica = new elettrica("Tesla", "Model S", 2020, 300000, 300);
console.log(autoElettrica.mostraAvvisoChilometraggio());


automobile.prototype.saluta = function(marca, modello, anno, km, autonomia) {
    return `Ciao, questa è una ${this.marca} ${this.modello}!`;
}

