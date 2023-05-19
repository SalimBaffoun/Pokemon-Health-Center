import { Pokemon } from "./pokemon";

export class recoveryMachine {


    recoveryOne(pokemons: Pokemon[], index: number): void {
      if (index >= 0 && index < pokemons.length) {
        const pokemon = pokemons[index];
        pokemon.setHp(pokemon.getHp() + 10);
        pokemon.updateHealthBar(); // Ajoutez cette ligne pour mettre à jour la barre de progression
        console.log(`${pokemon.name} a récupéré 10 points de vie`);
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
