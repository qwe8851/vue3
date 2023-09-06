const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "", // watch
      lastName: "",
      // fullName: "",
    };
  },
  watch: {
    // data나 computed 프로퍼티 이름을 watch에 설정하면
    // 설정된 프로퍼티가 변경될때마다 watch메서드가 vue에 의해 자동실행됨
    // 그리고 참조하는 프로퍼티의 값을 argument로 전달함
    /**
    watch: {
      name(newValue, oldValue){}
    }
    name(value) {
      this.fullName = !value ? "" : value + ` ${this.lastName}`;
    },
    lastName(value) {
      this.fullName = !value ? "" : this.name + ` ${value}`;
    },
     */

    // 아래의 예시처럼 원하는 프로퍼티를 계속 감시해야 할 경우 유용
    /**
    counter(value) {
      this.counter = value > 50 ? 0 : value;
    },
    */

    // 다른 예로 특정 테이터가 변경되면 http요청이나 타이머를 재설정하는 등의 경우 유용
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
  },
  computed: {
    // 입력을 두개 이상 받는 경우에는 watch보다 computed가 낫다
    fullName() {
      if (!this.name && !this.lastName) {
        return "";
      } else {
        return this.name + " " + this.lastName;
      }
    },
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount('#events');
