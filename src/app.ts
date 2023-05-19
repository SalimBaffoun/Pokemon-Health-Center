import { Pokemon } from "./pokemon.js";
import { recoveryMachine } from "./recoveryMachine.js";

const hpValueElt = document.querySelector(".hp-value")! as HTMLElement;
const hpBarElt = document.querySelector(".hp-bar");


const hpValueElts = document.querySelectorAll(".hp-value");
const hpBarElts = document.querySelectorAll(".progress-bar-inner");

const bulbiSound  = new Audio('Pokemon-Health-Center/assets/sound/Cri_1_x_0001.ogg');
const herbSound  = new Audio('Pokemon-Health-Center/assets/sound/Cri_0002_EB.ogg');
const florSound  = new Audio('Pokemon-Health-Center/assets/sound/Cri_0003_EB.ogg');
const salamecheSound  = new Audio('Pokemon-Health-Center/assets/sound/Cri_0004_EB.ogg');
const reptincelSound  = new Audio('Pokemon-Health-Center/assets/sound/Cri_0005_EB.ogg');
const dracaufeuSound  = new Audio('Pokemon-Health-Center/assets/sound/Cri_6_x_0001.ogg');


const pokemons = [
    new Pokemon("Bulbizarre", 0,'bulbiSound'),
    new Pokemon("Herbizarre", 90,'herbSound'),
    new Pokemon("Florizarre", 40,'florSound'),
    new Pokemon("salameche", 10,'salamecheSound'),
    new Pokemon("reptincel", 10,'reptincelSound'),
    new Pokemon("dracaufeu", 5,'dracaufeuSound'),

    
];


for (let i = 0; i < pokemons.length; i++) {
    const pokemon = pokemons[i];
    const hpValueElt = hpValueElts[i];
    const hpBarElt = hpBarElts[i];

    hpValueElt.innerHTML = `${pokemon.getHp()}`;
    pokemon.updateHealthBar();
}

const Machine = new recoveryMachine();

const recoveryOneBtns = document.querySelectorAll(".button");
for (let i = 0; i < recoveryOneBtns.length; i++) {
    const recoveryOneBtn = recoveryOneBtns[i];
    recoveryOneBtn.addEventListener("click", () => {
        Machine.recoveryOne(pokemons, i);
        hpValueElts[i].innerHTML = `${pokemons[i].getHp()}`;
    });
}








