import { Pokemon } from "./pokemon";

export class recoveryMachine {


    constructor(nbroom: number) {
        nbroom = 6;
    }

    recovery(pokemon: Pokemon): void {
        pokemon.hp = pokemon.hp + 10;
        console.log(pokemon.name + " a récupéré 10 points de vie");

    }

    recoveryAll(pokemon: Pokemon[]) {

        for (let i = 0; i < pokemon.length; i++) {
            pokemon[i].hp = pokemon[i].hp + 10;
            console.log(pokemon[i].name + " a récupéré 10 points de vie");
        }
    }

    recoveryOne(pokemon: Pokemon[]) {
        let i = Math.floor(Math.random() * pokemon.length);
        pokemon[i].hp = pokemon[i].hp + 10;
        console.log(pokemon[i].name + " a récupéré 10 points de vie");
    }


}


