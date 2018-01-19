new Vue({
  el: '#app',
  data: {
    showControls: false,
    showLog: false,
    player: {
      name: 'Player',
      health: 100,
      strength: 10,
      intellect: 10
    },
    monster: {
      name: 'Monster',
      health: 100,
      strength: 10
    },
    playerTurn: true,
    log: []
  },
  methods: {
    startGame() {
      this.showControls = true;
      this.showLog = true;
    },
    playerAttack() {
      this.attack();
      this.switchTurns();
      this.attack();
    },
    attack() {
      let player = this.playerTurn ? this.player : this.monster;
      let opponent = this.playerTurn ? this.monster : this.player;
      let damage = Math.floor(Math.random() * player.strength) + 1;

      if (player.health == 0 || opponent.health == 0) {
        if (this.showControls) this.showControls = false;
        return
      };

      opponent.health -= damage;
      if (opponent.health < 0)
        opponent.health = 0;

      this.log.unshift(player.name + " hits " + opponent.name + " for " + damage);
    },
    specialAttack() {

    },
    heal() {
      if (this.player.health == 100) return;

      let healingPower = this.player.health > 90
                         ? 100 - this.player.health
                         : this.player.intellect;

      this.player.health += healingPower;

      this.log.unshift("Player heals himself for " + healingPower);
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