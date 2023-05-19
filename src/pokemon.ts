export class Pokemon {

    public name: string;
    public hp: number;
    public playsound : string;


    constructor(name: string, hp: number,playsound: string) {
        this.name = name;
        this.hp = Math.max(Math.min(hp, 100), 0);
        this.playsound = playsound;
    }

    setHp(hp: number): void {
        this.hp = Math.max(Math.min(hp, 100), 0);
    }

    getHp(): number {
        return this.hp;
    }

    getSound() {
        return this.playsound;
    }

    playSound() {
        const sound = new Audio(`../assets/sound/${this.playsound}.ogg`);
        sound.play();
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
            healthStatus = 'Blessé';
            progressBarClass = 'hp-low';
        } else {
            healthStatus = 'En pleine forme';
            progressBarClass = 'hp-high';
        }

        const progressBar = document.getElementById(`${this.name.toLowerCase()}-hp-bar`) as HTMLElement;
        progressBar?.classList.remove('hp-empty', 'hp-low', 'hp-high');
        progressBar?.classList.add(progressBarClass);

        progressBar.style.width = `${this.hp}%`;
        progressBar.style.backgroundColor = getProgressBarColor(progressBarClass);

        const healthStatusElement = document.getElementById(`${this.name.toLowerCase()}-health-status`);
        if (healthStatusElement) {
        healthStatusElement.innerText = `Etat : ${healthStatus}`;
  }

    }
}

function getProgressBarColor(progressBarClass: string): string {
    switch (progressBarClass) {
        case 'hp-empty':
            return 'red';
        case 'hp-low':
            return 'yellow';
        case 'hp-high':
            return 'green';
        default:
            return 'gray';
    }
}


