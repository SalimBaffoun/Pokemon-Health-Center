import { Pokemon } from "./pokemon.js";
import { recoveryMachine } from "./recoveryMachine.js";

const hpValueElt = document.getElementById(".hp-value");
const hpBarElt = document.getElementById(".hp-bar");


const bulbizarre = new Pokemon('Bulbizarre', 50);
    const pokemons = [bulbizarre];
    bulbizarre.levelHealth();
    bulbizarre.updateHealthBar();

    const machine = new recoveryMachine();
    machine.recoveryOne(pokemons, 0);
    bulbizarre.levelHealth();
    

    
    
    // bulbizarre.setHp(40);
    // bulbizarre.levelHealth();
    // bulbizarre.updateHealthBar();

    // bulbizarre.setHp(0);
    // bulbizarre.levelHealth();
    // bulbizarre.updateHealthBar();
    

    
  




    


    

