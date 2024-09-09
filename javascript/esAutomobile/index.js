class automobile {
    marca = ""
    modello = ""
    anno = 0
    _km = 0
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
        return this.km;
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

    monstraContatoreChiamate() {
        return this.#contatoreChimate;
    }

    get km() {
        return this._km;
    }

    set km(valore) {
        if(valore >= this._km) {
            this._km = valore;
        } else {
            console.log(`Il nuovo valore non può essere inferiore al valore corrente`);
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

    static verificaIstanza(obj, classe) {
        if(obj instanceof classe) {
            return `${obj.marca} è un'istanza di ${classe.name}`;
        } else {
            return `${obj.marca} non è un'istanza di ${classe.name}`;
        }
    }
}

const macchina = new automobile("Audi", "A3", 2008, 250000, 500);
const macchina2 = new automobile("Volkswagen", "Polo", 2016, 175000, 400)
macchina.mostraEtà();
console.log(automobile.confrontaChilometraggio(macchina, macchina2));
console.log(macchina.aggiungiChilometri(macchina.km)); //Numero di chiamate del contatore  
macchina.aggiungiChilometri();
console.log(macchina2.km);
macchina2.km = 165000;
macchina2.km = 190000;
console.log(macchina2.km);
console.log(macchina.mostraChilometraggio());
console.log(`Il metodo aggiungiChilometri è stato chiamato ${macchina.monstraContatoreChiamate()} volte`);// aggiungiChilometri() èstato chiamato 2 volte (1 volta a riga 93 e 1 volta a riga 94))


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
        this.autonomia += km;
        return `L'autonomia della batteria è aumentata di ${km} km`;
    }
}
const autoElettrica = new elettrica("Tesla", "Model S", 2020, 300000, 300);
console.log(autoElettrica.mostraAvvisoChilometraggio());
console.log(autoElettrica.descrizione());
console.log(autoElettrica.ricarica(100));


automobile.prototype.saluta = function() {
    return `Ciao, questa è una ${this.marca} ${this.modello}!`;
}

console.log(macchina.saluta());
console.log(autoElettrica.saluta());

class camion extends automobile {
    caricoMassimo = 0;
    capacitàCarico = 0;

    constructor(marca, modello, anno, km, autonomia, caricoMassimo, capacitàCarico) {
        super(marca, modello, anno, km, autonomia);
        this.caricoMassimo = caricoMassimo;
        this.capacitàCarico = capacitàCarico;
    }

    descrizione() {
        return `${super.descrizione()} con un carico massimo di ${this.caricoMassimo}kg e una capacità attuale di ${this.capacitàCarico}kg`;
    }

    carica(kg) {
        if(this.capacitàCarico + kg <= this.caricoMassimo) {
            this.capacitàCarico += kg;
            console.log(`Il carico è aumentato di ${kg}kg, quindi il carico attuale ora è di ${this.capacitàCarico}kg`);
        } else {
            console.log(`Il carico attuale non può essere maggiore del carico massimo di ${this.caricoMassimo}kg`);
        }
    }
}

const mioCamion = new camion("Iveco", "190", 2012, 20000, 150000, 400, 200);
console.log(mioCamion.descrizione());
mioCamion.carica(50);
mioCamion.carica(500);
console.log(mioCamion instanceof automobile);
console.log(macchina2 instanceof camion);
console.log(mioCamion instanceof camion);
console.log(automobile.verificaIstanza(mioCamion, camion));
console.log(automobile.verificaIstanza(mioCamion, automobile));
console.log(automobile.verificaIstanza(macchina2, camion));