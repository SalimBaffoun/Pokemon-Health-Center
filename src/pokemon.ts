export class Pokemon  {

    public name: string;

    public hp: number;

    
    constructor(name: string, hp: number) {
        this.name = name;
        this.hp = Math.min(hp,0);
        this.hp = Math.max(hp,100);
    }

    setHp(hp: number): void {
        this.hp = hp;
    }

    getHp(): number {
        return this.hp;
    }
    
    levelHealth(): void {
                
        console.log(`${this.name} a ${this.hp} points de vie`);
    }
    

    checkHealth(): void {
        if (this.hp <= 0) {
            console.log(`${this.name} est KO`);
        } else if (this.hp <= 50) {
            console.log(`${this.name} est blessé`);
        } else {
            console.log(`${this.name} est en pleine forme`);
        }
    } 
}


