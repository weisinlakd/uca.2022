import { Carne, Sangre } from "./comidas.js";
import { log, getRandomInt } from "./helpers/functions.js";

export class Animal {

    #diaD;
    constructor(nombre, edad, expectativaDeVida, vertebrado = true, duracionDeComida = 4000, duracionEstadoAlimentado = 10000) {
        this._nombre = nombre
        this._edad = edad,
        this._expectativaDeVida = expectativaDeVida;
        this._vertebrado = vertebrado;
        this._duracionDeComida = duracionDeComida;
        this._duracionEstadoAlimentado = duracionEstadoAlimentado
        this.vivir();

        this.#setDiaD();
        this.generarDiaD()
    }
    
    hambre = true;
    hambreTimeout = null;
    comiendoTimeout = null;
    movimientoTimeout = null;
    estaComiendo = null;
    estaMoviendo = null;

    generarDiaD() {
        setTimeout(() => {
            this.#clearAllTimers()
            this.vive = false;
            log(`${this.nombre} feneció,pereció,finiquitó,etc`);
            if (this.#diaD < this.expectativaDeVida) log(`${this.nombre} vivió menos de lo esperado, llegando a tener una edad de ${this._edad}`)
            else log(`${this.nombre} vivió más de lo esperado, llegando a tener una edad de ${this._edad}`)
        }, this.#diaD)
    }

    get nombre () {
        return `El animal ${this._nombre}`
    }

    set nombre (nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    get edad () {
        return `El animal ${this._nombre} tiene ${this._edad}`
    }

    set edad (edad) {
        this._edad = edad;
    }

    get vertebrado () {
        return `El animal ${this._nombre} ${this._vertebrado ? 'es' : 'no es'} vertebrado`
    }

    comer(comida) {
        if (!this.vive) return `${this._nombre} no come más :(`
        if (this.estaComiendo) return `${this._nombre} ya está comiendo`
        if (!this.hambre) return `${this._nombre} no tiene hambre`
        if (!(comida instanceof Comida)) return `no es comida`

        clearTimeout(this.hambreTimeout)
        
        this.estaComiendo = setInterval(()=>log(`comiendo ${comida.nombre}...`), comida.duracion);
        
        this.terminoComerTimeout = setTimeout(()=>{
            clearInterval(this.estaComiendo);
            log(`${this._nombre} terminó de comer`);
            this.hambre = false;
        }, this._duracionDeComida);
        
        this.hambreTimeout = setTimeout(() => {
            log(`${this.nombre} tiene hambre`)
            this.hambre = true;
        }, this._duracionEstadoAlimentado)

    }

    mover(movimiento) {
        if (!this.vive) return `${this._nombre} no se mueve más :(`
        if (this.estaMoviendo) return `${this._nombre} ya está ${movimiento.moviendose}`
        if (this.estaComiendo) return `${this._nombre} está comiendo`

        this.estaMoviendo = setInterval(() => movimiento.ejecutar(this), movimiento.intervalo);
        this.movimientoTimeout = setTimeout(() => {
            clearInterval(this.estaMoviendo);
            log(`${this._nombre} terminó de ${movimiento.nombre}`);
        }, movimiento.duracion)
    }

    vivir() {
        this.vive = true;
        setInterval(() => this._edad++, 1000);
    }

    #setDiaD(){
        this.#diaD = Math.abs((this._expectativaDeVida - this._edad) + getRandomInt(-30,30) * 1000);
    }

    #clearAllTimers() {
        [this.hambreTimeout, this.comiendoTimeout, this.terminoComerTimeout, this.movimientoTimeout].forEach(e => clearTimeout(e));
        [this.estaComiendo, this.estaMoviendo].forEach(e => clearInterval(e));
    }
}



export class Leon extends Animal {
    constructor(nombre, edad) {
        super(nombre, edad, 50, true, 10000, 25000);
        this.comidas = [new Carne("venado", 500), new Carne("vaca", 300)];
        this.movimientos = ["correr", "caminar"];
    }

    comer(comida) {
        if (!(comida instanceof Carne)) return `${this.nombre} es un león y solo come carne`
        let esComidaFavorita = false;
        for (let i = 0; i < this.comidas.length; i++) {
            const c = this.comidas[i];
            if (this.comidas[i].esMismaCarne(comida)) {
                esComidaFavorita = true;
                break; 
            } 
        }

        if (!esComidaFavorita) {
            let num = getRandomInt(-2,2);
            if (num < 1) return `${this.nombre} no quiso comer ${comida.nombre} porque no le gusta`;
            console.log(`${this.nombre} intentará comer ${comida.nombre} pese a que no le gusta`);
        }
        super.comer(comida);
    }

    mover(movimiento) {
        if (!this.movimientos.includes(movimiento.nombre)) return `${this.nombre} no puede ${movimiento.nombre}`
        super.mover(movimiento)
    }
}

export class Mosquito extends Animal {
    constructor(nombre, edad) {
        super(nombre, edad, 10, false, 2000, 5000);
        this.comidas = [new Sangre("sangre humana", 100)];
        this.movimientos = ["volar"];
    }

    comer(comida) {
        if (!(comida instanceof Sangre)) return `${this.nombre} es un mosquito y se alimenta únicamente con sangre`
        super.comer(comida);
    }

    mover(movimiento) {
        if (!this.movimientos.includes(movimiento.nombre)) return `${this.nombre} no puede ${movimiento.nombre}`
        super.mover(movimiento)
    }

    get nombre() {
        return `El mosquito ${this._nombre}`
    }
}