const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredGoalValue: "",
    };
  },
  methods: {
    addGoals() {
      this.goals.push(this.enteredGoalValue);
    },
  },
});

app.mount('#user-goals');
