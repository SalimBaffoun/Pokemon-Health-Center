import { Pokemon } from "./pokemon";

export class recoveryMachine {



  recoveryOne(pokemons: Pokemon[], index: number): void {
    if (index >= 0 && index < pokemons.length) {
      const pokemon = pokemons[index];
      const previousHp = pokemon.getHp();
  
      pokemon.setHp(previousHp + 10);
      pokemon.updateHealthBar(); // Mise à jour de la barre de progression
  
      const currentHp = pokemon.getHp();
      const state = this.getPokemonState(currentHp);
  
      console.log(`${pokemon.name} a récupéré 10 points de vie`);
      console.log(`État de ${pokemon.name}: ${state}`);
  
      if (previousHp <= 10 && currentHp > 10) {
        console.log(`${pokemon.name} n'est plus KO`);

      }
    }
  }
  
  getPokemonState(hp: number): string {
    if (hp <= 10) {
      return 'KO';
    } else if (hp <= 50) {
      return 'Blessé';
    } else {
      return 'En pleine forme';
    }
  }
  
    



    
    // recoveryAll(pokemons: Pokemon[]): void {
    //     let allMaxHealth = true;

    //     for (let i = 0; i < pokemons.length; i++) {
    //         const pokemon = pokemons[i];
    //         if (pokemon.getHp() < 100) {
    //             pokemon.setHp(pokemon.getHp() + 10);
    //             pokemon.updateHealthBar();
    //             allMaxHealth = false;
    //         }
    //     }

    //     if (allMaxHealth) {
    //         console.log("Tous les Pokémon sont au maximum de leur forme");
    //     }
    // }
}
