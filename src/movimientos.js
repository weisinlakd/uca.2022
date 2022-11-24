export class Movimiento {
    #tipos = ["terrestre", "aereo", "acuático"]
    constructor(tipo, duracion, intervalo = 500) {
        if (!this.#tipos.includes(tipo)) throw new Error("tipo incorrecto")
        this.tipo = tipo;
        this.duracion = duracion;
        this.intervalo = intervalo;
    }
}

export class Correr extends Movimiento {
    constructor(duracion) {
        super("terrestre", duracion);
        this.nombre = "correr";
    }

    ejecutar(animal) {
        console.log(`${animal.nombre} está corriendo`);
    }

    get movimiento () {
        return `corriendo`
    }
}

export class Caminar extends Movimiento {
    constructor(duracion) {
        super("terrestre", duracion);
        this.nombre = "caminar";
    }

    ejecutar(animal) {
        console.log(`${animal.nombre} está caminando`);
    }

    get movimiento () {
        return `caminando`
    }
}

export class Volar extends Movimiento {
    constructor(duracion) {
        super("terrestre", duracion);
        this.nombre = "volar";
    }

    ejecutar(animal) {
        console.log(`${animal.nombre} está volando`);
    }

    get movimiento () {
        return `volando`
    }
}