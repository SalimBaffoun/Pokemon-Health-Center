export class Pokemon {

    public name: string;
    public hp: number;
    public playsound: string;
    public picture: string;


    constructor(name: string, hp: number, playsound: string, picture: string) {
        this.name = name;
        this.hp = Math.max(Math.min(hp, 100), 0);
        this.playsound = playsound;
        this.picture = picture;
    }

    setHp(hp: number): void {
        const previousHp = this.hp;
        this.hp = Math.max(Math.min(hp, 100), 0);


        if (previousHp !== 100 && this.hp === 100) {
            this.playSound();
        }
    }

    getHp(): number {
        return this.hp;
    }

    getSound() {
        return this.playsound;
    }
    

    playSound(): void {
        const sound = new Audio(`./assets/sound/${this.playsound}.mp3`);
        sound.play();
    }


    levelHealth(): void {
        console.log(`${this.name} a ${this.hp} points de vie`);
    }


    getProgressBarColor(progressBarClass: string): string {
        switch (progressBarClass) {
            case 'progress-bar-inner':
                return '#f3f3f3';
            case 'hp-empty':
                return '#f44336';
            case 'hp-low':
                return '#ffc107';
            case 'hp-high':
                return '#4caf50';
            default:
                return 'gray';
        }
    }

    updateHealthBar(): void {
        let healthStatus: string;
        let progressBarClass: string;

        if (this.hp <= 5) {
            
            progressBarClass = 'hp-empty';
        } else if (this.hp <= 70) {
            
            progressBarClass = 'hp-low';
        } else {
            
            progressBarClass = 'hp-high';

            const card = document.getElementById(`${this.name.toLowerCase()}-card`) as HTMLDivElement;
            const healthyPokemonContainer = document.getElementById('pokemon-container') as HTMLDivElement;
            const waitingRoomContainer = document.getElementById('waiting-room-container') as HTMLDivElement;

            if (card && waitingRoomContainer.contains(card)) {
                card.classList.remove('hidden');
                waitingRoomContainer.removeChild(card);
                healthyPokemonContainer.appendChild(card);
            }
        }

        const progressBar = document.getElementById(`${this.name.toLowerCase()}-hp-bar`) as HTMLDivElement;
        progressBar?.classList.remove('hp-empty', 'hp-low', 'hp-high');
        progressBar?.classList.add(progressBarClass);

        progressBar.style.width = `${this.hp}%`;
        progressBar.style.backgroundColor = this.getProgressBarColor(progressBarClass);

        const healthStatusElement = document.getElementById(`${this.name.toLowerCase()}-health-status`);
        if (healthStatusElement) {
            healthStatusElement.innerText = `Etat : ${this.getStatus()}`;
        }
    }

        getStatus(): string {
            if (this.hp <= 5) {
                return 'Mort';
            }
            if (this.hp <= 70) {
                return 'Blessé';
            }
            return 'En pleine forme';

        }
    













    createCard(pokemon: Pokemon): HTMLElement {
        const card = document.createElement("div");
        card.classList.add("pokemon-card");



        if (pokemon.getHp() === 100) {
            card.classList.add("hidden");
        }

        const img = document.createElement("img");
        img.src = pokemon.picture;
        img.alt = pokemon.name;
        card.appendChild(img);

        const title = document.createElement("div");
        title.classList.add("card-title");
        title.textContent = pokemon.name;
        card.appendChild(title);

        const state = document.createElement("p");
        state.id = `${pokemon.name.toLowerCase()}-state`;
        state.classList.add("pokemon-state");
        state.textContent = "Etat : " + pokemon.getStatus();
        card.appendChild(state);


        const healthStatus = document.createElement("p");
        card.appendChild(healthStatus);

        const progressBar = document.createElement("div");
        const progressBarId = `${pokemon.name.toLowerCase()}-hp-bar`;
        progressBar.id = progressBarId;
        progressBar.classList.add("progress-bar");

        const progressBarInner = document.createElement("div");
        const progressBarInnerId = `${pokemon.name.toLowerCase()}-hp-bar-inner`;
        progressBarInner.id = progressBarInnerId;
        progressBar.appendChild(progressBarInner);

        card.appendChild(progressBar);


        const hp = document.createElement("div");
        hp.classList.add("card-hp");
        hp.textContent = "Niveau de vie : ";
        const hpValue = document.createElement("span");
        hpValue.classList.add("hp-value");
        hpValue.textContent = pokemon.getHp().toString();
        hp.appendChild(hpValue);
        card.appendChild(hp);

        const button = document.createElement("button");
        button.classList.add("button");
        button.textContent = "Soigner";
        card.appendChild(button);

        return card;
    }

}
