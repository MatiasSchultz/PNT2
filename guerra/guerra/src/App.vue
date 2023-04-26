<script >
import PlayerA from './components/JA.vue'
import PlayerB from './components/JB.vue'

export default {
  components: {
    PlayerA,
    PlayerB,
  },
  data() {
    return {
      playerAStamina: 100,
      playerBStamina: 100,
      activePlayer: "A",
    };
  },
  methods: {
    playerAttack(player, damage) {
      if (player === "A") {
        this.playerBStamina = Math.max(this.playerBStamina - damage, 0);
      } else {
        this.playerAStamina = Math.max(this.playerAStamina - damage, 0);
      }
      this.toggleActivePlayer();
    },
    playerHeal(player, healing) {
      if (player === "A") {
        this.playerAStamina = Math.min(this.playerAStamina + healing, 100);
      } else {
        this.playerBStamina = Math.min(this.playerBStamina + healing, 100);
      }
      this.toggleActivePlayer();
    },
    playerSwap(player) {
      let tempStamina;

      if (player === "A") {
        tempStamina = this.playerAStamina;
        this.playerAStamina = this.playerBStamina;
        this.playerBStamina = tempStamina;
      } else {
        tempStamina = this.playerBStamina;
        this.playerBStamina = this.playerAStamina;
        this.playerAStamina = tempStamina;
      }
      
      this.toggleActivePlayer();
    },
    toggleActivePlayer() {
      if (this.activePlayer === "A") {
        this.activePlayer = "B";
      } else {
        this.activePlayer = "A";
      }
    },
  },
};
</script>

<template>
  <div>
    
    <PlayerA v-if="activePlayer === 'A'" :stamina="playerAStamina" @attack="playerAttack" @heal="playerHeal" @swap="playerSwap" />
    <p v-if="activePlayer === 'A'">Stamina:{{this.playerAStamina}}</p>
    <PlayerB v-if="activePlayer === 'B'" :stamina="playerBStamina" @attack="playerAttack" @heal="playerHeal" @swap="playerSwap" />
    <p v-if="activePlayer === 'B'">Stamina:{{this.playerBStamina}}</p>
  </div>
</template>



<style scoped>

</style>
