import { Carne, Sangre } from "./src/comidas.js";
import { Correr, Volar, Caminar } from "./src/movimientos.js";

import { Leon, Mosquito } from "./src/animales.js";
import { log } from "./src/helpers/functions.js";

const leon = new Leon("leoncito", 1);
log(leon.mover(new Correr(5000)))

const mosquito = new Mosquito("Aedes", 1);
log(mosquito.mover(new Volar(1000)))