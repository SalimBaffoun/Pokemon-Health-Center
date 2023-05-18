class Pokemon  {

     name: string;
     private hp: number;
     
     constructor(name: string, hp: number) {
         this.name = name;
         this.hp = Math.max(Math.min(hp,100),0);
 }
     
     public getHp(): number {
         return this.hp;
     }
 
     public setHp(hp: number) {
         this.hp = Math.max(Math.min(hp,100),0);
     }
 
     levelHealth(): void {
                 
         console.log(`${this.name} a ${this.hp} points de vie`);
     }
 
 
 }

 class recoveryMachine {
 
 
         recovery(pokemon : Pokemon): void {
            pokemon.setHp(100);     
                //  console.log(`${pokemon.name} a ${pokemon.getHp} points de vie`);
             }
 
         }
 
 const pikachu = new Pokemon('Pikachu', 50);
 
pikachu.levelHealth();

const recoveryMachine1 = new recoveryMachine();
recoveryMachine1.recovery(pikachu);
pikachu.levelHealth();
// // const bulbizarre = new Pokemon('Bul bizarre', 100);
// //  const salameche = new Pokemon('Salameche', 100);
// //  const carapuce = new Pokemon('Carapuce', 100);
 
 
 
 
 
 
 



























