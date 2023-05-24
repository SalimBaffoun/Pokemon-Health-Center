import { Pokemon } from "./pokemon";

export class recoveryMachine {

  isHealthyRoomFull(): boolean {
    const healthyContainer = document.getElementById("pokemon-container") as HTMLElement;
    const healthyPokemons = Array.from(healthyContainer.querySelectorAll(".pokemon-card"));
    return healthyPokemons.length >= 6;
  }




  recoveryOne(pokemons: Pokemon[], index: number): void {
    if (index >= 0 && index < pokemons.length) {
      const pokemon = pokemons[index];
      const previousHp = pokemon.getHp();


      if (this.isHealthyRoomFull()) {
        console.log("La salle de soins est déjà pleine. Impossible de soigner plus de Pokémon.");
        return;
      }
      pokemon.setHp(previousHp + 10);
      pokemon.updateHealthBar();

      const currentHp = pokemon.getHp();
      const state = this.getPokemonState(currentHp);

      console.log(`${pokemon.name} a récupéré 10 points de vie`);
      console.log(`État de ${pokemon.name}: ${state}`);

      if (previousHp <= 10 && currentHp > 10) {
        console.log(`${pokemon.name} n'est plus KO`);

      }
      const stateElement = document.getElementById(`${pokemon.name.toLowerCase()}-state`);
      if (stateElement) {
        const currentHp = pokemon.getHp();
        const state = this.getPokemonState(currentHp);
        stateElement.textContent = `Etat : ${state}`;
      }

    }
  }

  getPokemonState(hp: number): string {
    if (hp <= 10) {
      return 'KO';
    } else if (hp <= 80) {
      return 'Blessé';
    } else {
      return 'En pleine forme';
    }
  }

  recoveryAll(pokemons: Pokemon[]): void {
    let allMaxHealth = true;
    const maxPokemonCount = 6;
    let healedPokemonCount = 0;

    const healthyContainer = document.getElementById("pokemon-container") as HTMLElement;
    const healthyPokemons = Array.from(healthyContainer.querySelectorAll(".pokemon-card"));

    for (let i = 0; i < healthyPokemons.length; i++) {
      const pokemonCard = healthyPokemons[i];
      const pokemonName = pokemonCard.querySelector(".card-title")?.textContent;
      const pokemon = pokemons.find((pokemon) => pokemon.name === pokemonName);

      if (pokemon && pokemon.getHp() < 100 && healedPokemonCount < maxPokemonCount) {
        pokemon.setHp(100);
        pokemon.updateHealthBar();
        allMaxHealth = false;
        healedPokemonCount++;


        pokemonCard.remove();
      }
    }

    if (allMaxHealth) {
      console.log("Tous les Pokémon sont au maximum de leur forme");
    }
  }



}


