const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    reduce() {
      this.counter--;
    },
    setName(e, lastName) {
      this.name = e.target.value + ` ${lastName}`;
    },
  },
});

app.mount('#events');
