const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  computed: {
    boxAClasses() {
      return this.boxASelected ? 'active demo' : 'demo'; 
    },
    boxBClasses() {
      return this.boxBSelected ? 'active demo' : 'demo'; 
    },
    boxCClasses() {
      return this.boxCSelected ? 'active demo' : 'demo'; 
    },
  },
  methods: {
    boxSelector(box) {
      if (box === "A") this.boxASelected = !this.boxASelected;
      if (box === "B") this.boxBSelected = !this.boxBSelected;
      if (box === "C") this.boxCSelected = !this.boxCSelected;
    },
  },
});

app.mount("#styling");
