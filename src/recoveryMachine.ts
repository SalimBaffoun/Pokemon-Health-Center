import { Pokemon } from "./pokemon";

export class recoveryMachine {


    constructor(nbroom: number) {
        nbroom = 6;
    }


    recoveryAll(pokemon: Pokemon[]) {
        let i = 0;
        while (i < pokemon.length) {
            if (pokemon[i].hp < 100) {
                pokemon[i].hp = pokemon[i].hp + 10;
                console.log(pokemon[i].name + " a récupéré 10 points de vie");
                i++;
            }
            else {
                console.log("Tous les pokémons sont au maximum de leur forme");
                i = pokemon.length;
            }
        }

        
    }

    recoveryOne(pokemon: Pokemon[]) {
        let i = 0;
        let j = 0;
        while (i < pokemon.length) {
            if (pokemon[i].hp < 100) {
                pokemon[i].hp = pokemon[i].hp + 10;
                console.log(pokemon[i].name + " a récupéré 10 points de vie");
                i = pokemon.length;
            }
            else {
                j++;
                i++;
            }
        }
        if (j == pokemon.length) {
            console.log("Tous les pokémons sont au maximum de leur forme");
        }
        
    }


}


