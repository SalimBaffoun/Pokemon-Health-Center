import { Pokemon } from "./pokemon.js";
import { recoveryMachine } from "./recoveryMachine.js";


function checkSelectionLimit(container: HTMLElement): boolean {
  const selectedPokemonCount = container.childElementCount;
  const selectionLimit = 6;

  if (selectedPokemonCount >= selectionLimit) {
    alert("Vous ne pouvez sélectionner que 6 Pokémon dans la section 'Healthy Pokemon'.");
    return false;
  }

  return true;
}


const pokemonData = [
 new Pokemon("Pikachu", 5, "Pikachuu", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"),
  new Pokemon("Bulbizarre", 45, "bulbasaur", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"),
  new Pokemon("Salamèche", 39, "Sala !", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"),
  new Pokemon("Carapuce", 44, "Cara !", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"),
  new Pokemon("Dracaufeu", 78, "Dracaufeu !", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"),
  new Pokemon("Mewtwo", 6, "Mewtwo !", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png"),
  new Pokemon("Mew", 10, "Mew !", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png"),
  new Pokemon("Rondoudou", 11, "Rondoudou !", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png"),
  new Pokemon("Ronflex", 60, "Ronflex !", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png"),
  new Pokemon("Piafabec", 40, "Piafabec !", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png"),
  new Pokemon("Rattata", 30, "Rattata !", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png"),
  new Pokemon("Rattatac", 55, "Rattatac !", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png"),
];


// Création des cartes Pokémon

const pokemons: Pokemon[] = [];

const container = document.getElementById("pokemon-container") as HTMLElement;
const waitingRoomContainer = document.getElementById("waiting-room-container") as HTMLElement;
const waitingRoomScrollContainer = document.createElement("div");
waitingRoomScrollContainer.classList.add("scroll-container");
waitingRoomContainer.appendChild(waitingRoomScrollContainer);

for (let i = 0; i < pokemonData.length; i++) {
  const pokemon = pokemonData[i];
  const pokemonObject = new Pokemon(pokemon.name, pokemon.hp, pokemon.playsound, pokemon.picture);
  const card = pokemonObject.createCard(pokemonObject);

  if (pokemonObject.getHp() >= 100 && container.childElementCount < 6) {
    container.appendChild(card);
  } else if (waitingRoomScrollContainer.childElementCount < 6) {
    waitingRoomScrollContainer.appendChild(card);
  } else {
    waitingRoomScrollContainer.appendChild(card);
    card.classList.add("hidden");
  }

  pokemons.push(pokemonObject);
}



// Sélection des Pokémon


waitingRoomContainer.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;
  if (target.classList.contains("pokemon-card")) {
    if (checkSelectionLimit(container)) { // Vérification de la limite de sélection
      const pokemonName = target.querySelector(".card-title")?.textContent;
      const pokemon = pokemons.find((pokemon) => pokemon.name === pokemonName);
      if (pokemon) {
        pokemon.updateHealthBar();
        target.classList.add("hidden");
        container.appendChild(target);
      }
    }
  }
});
waitingRoomScrollContainer.classList.add("scroll-container");





// Machine à soigner

const Machine = new recoveryMachine();

const recoveryOneBtns = document.querySelectorAll(".button");
const hpValueElts = document.querySelectorAll(".hp-value");

for (let i = 0; i < recoveryOneBtns.length; i++) {
  const recoveryOneBtn = recoveryOneBtns[i];
  recoveryOneBtn.addEventListener("click", () => {
    Machine.recoveryOne(pokemons, i);
    hpValueElts[i].innerHTML = `${pokemons[i].getHp()}`;
    pokemons[i].updateHealthBar();

    if (pokemons[i].getHp() === 100) {
      const pokemonCard = recoveryOneBtn.closest(".pokemon-card");
      pokemonCard !.remove();
    }
  });
}


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







