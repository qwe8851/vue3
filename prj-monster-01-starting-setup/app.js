const getRandomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
        };
    },
    computed: {
        playerHealthBarStyles() {
            return { width: `${this.playerHealth}%` };
        },
        monsterBarStyles() {
            return { width: `${this.monsterHealth}%` };
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0;
        },
    },
    methods: {
        attackMonster() {
            this.monsterHealth -= getRandomValue(5, 12);
            
            this.attackPlayer();
            this.currentRound ++;
        },
        attackPlayer() {
            this.playerHealth -= getRandomValue(8, 15);
        },
        specialAttackMonster() {
            this.monsterHealth -= getRandomValue(10, 25);
            
            this.attackPlayer();
            this.currentRound++;
        },
        healPlayer(){
            const healValue = getRandomValue(8, 20);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else{
                this.playerHealth += healValue;
            }

            this.attackPlayer();
            this.currentRound++;
        }
    },
});

app.mount("#game");