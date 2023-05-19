import { Pokemon } from "./pokemon.js";
import { recoveryMachine } from "./recoveryMachine.js";




const hpValueElts = document.querySelectorAll(".hp-value");


const bulbiSound = new Audio("Pokemon-Health-Center/assets/sound/bulbasaur.mp3");


const playsound = [bulbiSound];







const pokemons = [
    new Pokemon("Bulbizarre", 10,'bulbiSound'),
    new Pokemon("Herbizarre", 90,'herbSound'),
    new Pokemon("Florizarre", 40,'florSound'),
    new Pokemon("salameche", 10,'salamecheSound'),
    new Pokemon("reptincel", 10,'reptincelSound'),
    new Pokemon("dracaufeu", 5,'dracaufeuSound'),

    
];


for (let i = 0; i < pokemons.length; i++) {
  const pokemon = pokemons[i];
  const hpValueElt = hpValueElts[i];

  hpValueElt.innerHTML = `${pokemon.getHp()}`;
  pokemon.updateHealthBar();

  if (pokemon.getHp() === 100) {
    const soundToPlay = playsound[i];
    soundToPlay.play();
  }
}


const Machine = new recoveryMachine();

const recoveryOneBtns = document.querySelectorAll(".button");
for (let i = 0; i < recoveryOneBtns.length; i++) {
  const recoveryOneBtn = recoveryOneBtns[i];
  recoveryOneBtn.addEventListener("click", () => {
    Machine.recoveryOne(pokemons, i);
    hpValueElts[i].innerHTML = `${pokemons[i].getHp()}`;
    pokemons[i].updateHealthBar();
   });
}








