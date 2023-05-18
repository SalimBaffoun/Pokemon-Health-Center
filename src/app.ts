import { Pokemon } from "./pokemon.js";
import { recoveryMachine } from "./recoveryMachine";

let pikachu = new Pokemon("Pikachu", 100,);
let bulbizarre = new Pokemon("Bulbizarre", 100,);

pikachu.setHp(50);
bulbizarre.setHp(0);

pikachu.checkHealth();
bulbizarre.checkHealth();


