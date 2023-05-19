export class Pokemon {

    public name: string;
    public hp: number;

    constructor(name: string, hp: number) {
        this.name = name;
        this.hp = Math.max(Math.min(hp, 100), 0);
    }

    setHp(hp: number): void {
        this.hp = Math.max(Math.min(hp, 100), 0);
    }

    getHp(): number {
        return this.hp;
    }

    levelHealth(): void {
        console.log(`${this.name} a ${this.hp} points de vie`);
    }

    updateHealthBar(): void {
        let healthStatus: string;
        let progressBarClass: string;
        
        if (this.hp <= 0) {
            healthStatus = 'KO';
            progressBarClass = 'hp-empty';
        } else if (this.hp <= 50) {
            healthStatus = 'blessé';
            progressBarClass = 'hp-low';
        } else {
            healthStatus = 'en pleine forme';
            progressBarClass = 'hp-high';
        }
    
        const progressBar = document.getElementById(`${this.name.toLowerCase()}-hp-bar`);
        progressBar?.classList.remove('hp-empty', 'hp-low', 'hp-high');
        progressBar?.classList.add(progressBarClass);
        
        console.log(`${this.name} - Jauge de santé : ${healthStatus}`);
    }
}