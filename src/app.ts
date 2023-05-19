import { Pokemon } from "./pokemon.js";
import { recoveryMachine } from "./recoveryMachine.js";

const hpValueElt = document.querySelector(".hp-value")! as HTMLElement;
const hpBarElt = document.querySelector(".hp-bar");


const hpValueElts = document.querySelectorAll(".hp-value");
const hpBarElts = document.querySelectorAll(".progress-bar-inner");

const pokemons = [
    new Pokemon("Bulbizarre", 0),
    new Pokemon("Herbizarre", 90),
    new Pokemon("Florizarre", 40),
    new Pokemon("salameche", 0),
    new Pokemon("reptincel", 10),
    new Pokemon("dracaufeu", 100),

    
];


for (let i = 0; i < pokemons.length; i++) {
    const pokemon = pokemons[i];
    const hpValueElt = hpValueElts[i];
    const hpBarElt = hpBarElts[i];

    hpValueElt.innerHTML = `${pokemon.getHp()}`;
    pokemon.updateHealthBar();
}


    
  




    


    

