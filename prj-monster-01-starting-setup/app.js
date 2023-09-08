const getRandomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
        };
    },
    watch: {
        playerHealth(value){
            if(value <= 0 && this.monsterHealth <= 0){
                this.winner = 'draw';
            }else if (value <= 0){
                this.winner = 'monster';
            }
        },
        monsterHealth(value){
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'player';
            }
        },
    },
    computed: {
        playerHealthBarStyles() {
            if (this.winner === 'draw' || this.winner === 'monster') {
                this.playerHealth = 0;
            }
            return { width: `${this.playerHealth}%` };
        },
        monsterBarStyles() {
            if (this.winner === 'draw' || this.winner === 'player') {
                this.monsterHealth = 0;
            }
            return { width: `${this.monsterHealth}%` };
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0;
        },
    },
    methods: {
        attackMonster() {
            this.monsterHealth -= getRandomValue(8, 20);
            
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
        },
        surrender(){
            this.winner = 'monster';
        },
        startGame(){
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null;
        }
    },
});

app.mount("#game");