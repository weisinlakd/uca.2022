export class Comida {
    constructor(nombre, tipo, duracion, intervalo) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.duracion = duracion;
        this.intervalo = intervalo;
    };

}

export class Carne extends Comida {
    constructor(nombre, duracion = 300) {
        super(nombre, "carne", duracion)
    }

    esMismaCarne(carne) {
        return carne.tipo === this.tipo && carne.nombre === this.nombre;
    }
}


export class Sangre extends Comida {
    constructor(nombre, duracion = 100) {
        super(nombre, "sangre", duracion)
    }

}