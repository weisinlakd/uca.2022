import { Carne, Sangre } from "./src/comidas.js";
import { Correr, Volar, Caminar } from "./src/movimientos.js";

import { Leon, Mosquito } from "./src/animales.js";
import { log } from "./src/helpers/functions.js";
import prompts from 'prompts';

const interactive = false;

// IGNORAR POR AHOTA
const main = async (first = false, context = []) => {
    if (first) {
        // const leon = new Leon("leoncito", 1);
        // log(leon.mover(new Correr(5000)))    
        // const mosquito = new Mosquito("Aedes", 1);
        // log(mosquito.mover(new Volar(1000)))
    }

    const response = await prompts({type: 'text', name: 'line', message: "ingrese instrucción >"})
    context.push(response.line)

    const done = await prompts({
        type: 'confirm',
        name: 'value',
        message: 'Ingresar otra linea?',
        initial: true
    });

    if (done.value) return await main(false, context);

    const code = context.join(';');
    eval(code);
}


if (interactive) {   
    (main(true))
} else {
    // INGRESAR ACÁ EL CÓDIGO A EJECUTAR. USAR log(Clase.accion()) para que se vea en consola

    const leon = new Leon("leoncito", 1);
    log(leon.mover(new Correr(5000)))    

    // const mosquito = new Mosquito("Aedes", 1);
    // log(mosquito.comer(new Carne("venado", 1000)));
}