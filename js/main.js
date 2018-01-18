new Vue({
  el: '#app',
  data: {
    showControls: false,
    showLog: false
  },
  methods: {
    startGame() {
      this.showControls = true;
      this.showLog = true;
    },
    attack() {

    },
    specialAttack() {

    },
    heal() {

    },
    giveUp() {
      this.showControls = false;
    }
  }
});