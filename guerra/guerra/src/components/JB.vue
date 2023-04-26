<template>
  <div>
    <h2>{{ name }}</h2>
    <p>Stamina: {{ stamina }}</p>
    <button @click="attack" >Atacar</button>
    <button @click="heal" >Curar</button>
    <button @click="swap" v-if="canSwap">Swap</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Jugador B",
      stamina: 100,
      canSwap: true,
    };
  },
  methods: {
    attack() {
      const damage = Math.floor(Math.random() * 6) + 5;
      this.$emit("attack", "B", damage);
    },
    heal() {
      const healing = Math.floor(Math.random() * 15) + 1;
      this.$emit("heal", "B", healing);
    },
    swap() {
      this.$emit("swap", "B");
      this.canSwap = false;
    },
  },
};
</script>