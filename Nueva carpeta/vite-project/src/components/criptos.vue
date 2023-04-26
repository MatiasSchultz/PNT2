<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div>
    <label for="propiedad">Seleccionar propiedad:</label>
    <select v-model="propiedadSeleccionada" id="propiedad">
      <option value="name">Nombre</option>
      <option value="priceUsd">Precio en USD</option>
      <option value="marketCapUsd">Capitalización de mercado en USD</option>
      <option value="changePercent24Hr">Porcentaje de cambio en las últimas 24 horas</option>
    </select>
    <button @click="ordenarMonedas">Ordenar</button>
    <ul>
      <li v-for="moneda in monedas" :key="moneda.id" :class="{ 'rojo': moneda.changePercent24Hr < 0, 'verde': moneda.changePercent24Hr > 0 }">{{ moneda.name }} - {{ moneda.changePercent24Hr }} - {{ moneda[propiedadSeleccionada] }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      criptos: null,
      monedas: [],
      propiedadSeleccionada: 'changePercent24Hr'
    };
  },
  mounted() {
    fetch('https://api.coincap.io/v2/assets/')
      .then(response => response.json())
      .then(criptos => {
        this.criptos = criptos;
      });
  },
  watch: {
    criptos: function() {
      this.monedas = Object.values(this.criptos.data);
      this.monedas.sort((a, b) => b.changePercent24Hr - a.changePercent24Hr);
    }
  },
  methods: {
    ordenarMonedas() {
      this.monedas.sort((a, b) => {
          return b[this.propiedadSeleccionada] - a[this.propiedadSeleccionada];    
      });
    }
  }
};
</script>

<style>
.rojo {
  color: red;
}

.verde {
  color: green;
}
</style>

