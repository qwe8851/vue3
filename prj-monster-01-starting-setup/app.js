const attackValue = (min, max) => {
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
            this.currentRound ++;

            this.monsterHealth -= attackValue(5, 12);
            this.attackPlayer();
        },
        attackPlayer() {
            this.playerHealth -= attackValue(8, 15);
        },
        specialAttackMonster() {
            this.currentRound++;

            this.monsterHealth -= attackValue(10, 25);
            this.attackPlayer();
        },
    },
});

app.mount("#game");