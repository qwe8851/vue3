const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  computed: {
    // 의존성을 인식하고 의존성 중 하나가 변경된 경우에만 재실행
    // 데이터 프로퍼티처럼 사용 (메서드처럼 사용 X, 호출 X)
    fullName() {
      console.log("running again");
      return !this.name ? "" : this.name + " Schwarzmüller";
    },
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    // setName() {
    //   this.name = e.target.value;
    // },
    resetInput() {
      this.name = "";
    },
    // outputFullName(){
    //   console.log("running again");
    //   return !this.name ? '' : this.name + " Schwarzmüller";
    // },
  },
});

app.mount('#events');
