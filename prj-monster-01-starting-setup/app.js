const attackValue = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
        };
    },
    computed: {
        playerHealthBarStyles() {
            return { width: `${this.playerHealth}%` };
        },
        monsterBarStyles() {
            return { width: `${this.monsterHealth}%` };
        },
    },
    methods: {
        attackMonster() {
            this.monsterHealth -= attackValue(5, 12);
            this.attackPlayer();
        },
        attackPlayer() {
            this.playerHealth -= attackValue(8, 15);
        },
    },
});

app.mount("#game");