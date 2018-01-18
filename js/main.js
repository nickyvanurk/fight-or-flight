new Vue({
  el: '#app',
  data: {
    showControls: false,
    showLog: false,
    player: {health: 100, strength: 10, intellect: 10},
    monster: {health: 100}
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
      if (this.player.health == 100)
        return;
      else if (this.player.health > 90)
        this.player.health = 100;
      else
        this.player.health += this.player.intellect;
    },
    giveUp() {
      this.showControls = false;
    }
  }
});