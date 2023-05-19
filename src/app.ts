import { Pokemon } from "./pokemon.js";
import { recoveryMachine } from "./recoveryMachine.js";




const hpValueElts = document.querySelectorAll(".hp-value");


const bulbasaur  = new Audio("./assets/sound/bulbasaur.mp3");

const playsound = [bulbasaur];


const pokemons = [
    new Pokemon("Bulbizarre", 5,'bulbasaur'),
    new Pokemon("Herbizarre", 90,''),
    new Pokemon("Florizarre", 40,''),
    new Pokemon("salameche", 10,''),
    new Pokemon("reptincel", 10,''),
    new Pokemon("dracaufeu", 5,''),

    
];


for (let i = 0; i < pokemons.length; i++) {
  const pokemon = pokemons[i];
  const hpValueElt = hpValueElts[i];

  hpValueElt.innerHTML = `${pokemon.getHp()}`;
  pokemon.updateHealthBar();

  if (pokemon.getHp() === 100) {
    playsound[i].play();

}
}

const Machine = new recoveryMachine();

// const recoveryOneBtns = document.querySelectorAll(".button");
// for (let i = 0; i < recoveryOneBtns.length; i++) {
//   const recoveryOneBtn = recoveryOneBtns[i];
//   recoveryOneBtn.addEventListener("click", () => {
//     Machine.recoveryOne(pokemons, i);
//     hpValueElts[i].innerHTML = `${pokemons[i].getHp()}`;
//     pokemons[i].updateHealthBar();
//   });
// }

const recoveryAllBtn = document.querySelector(".buttonAll") as HTMLButtonElement;

recoveryAllBtn.addEventListener("click", () => {
  Machine.recoveryAll(pokemons);

  for (let i = 0; i < pokemons.length; i++) {
    const pokemon = pokemons[i];
    hpValueElts[i].innerHTML = `${pokemon.getHp()}`;
    pokemon.updateHealthBar();
  }
}
);

console.log(recoveryAllBtn);









