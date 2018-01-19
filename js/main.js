new Vue({
  el: '#app',
  data: {
    showControls: false,
    showLog: false,
    player: {health: 100, strength: 10, intellect: 10},
    monster: {health: 100},
    playerTurn: true,
    log: []
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
      if (this.player.health == 100) return;

      let healingPower = this.player.health > 90
                         ? 100 - this.player.health
                         : this.player.intellect;

      this.player.health += healingPower;
      this.log.push({"Player heals himself for " + healingPower});
      this.switchTurns();
    },
    giveUp() {
      this.showControls = false;
    },
    switchTurns() {
      this.playerTurn = !this.playerTurn;
    }
  }
});