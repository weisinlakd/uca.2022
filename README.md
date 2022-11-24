# Trabajo Práctico Programación

## Integrantes
* Ludueña Saavedra Luciano
* Ojeda Lautaro
* Ojeda Leandro

## Requerimientos

* Tener [node](https://nodejs.org/en/) instalado 

## Instrucciones

1. Instalar dependencia `nodemon` (corre el programa)

```sh
npm install
```
2. Ejecutar el programa

```sh
npm start
```

### Agregar clases

1. Ir al archivo que corresponda según tipo de clase (animal, comida o movimiento)

2. Definir como `export class NombreClase` 

3. En los archivos que se vaya a utilizar agregarlo dentro de la instrucción `import` del archivo correspondiente:

```js
// supongamos que agregué la clase Perro en animales.js y la quiero usar en main.js

// 1. dentro de animales.js
export class Perro extends Animal {
    constructor() {
        // ...
    }

    comer() {
        // ...
    }

    mover() {
        ...
    }
}

// 2. dentro de main.js:
import { Perro, ... } from "./src/animales.js"
```