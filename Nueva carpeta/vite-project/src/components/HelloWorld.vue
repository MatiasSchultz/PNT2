<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div>
    <ul>
      <li v-for="personaje in personajes" :key="personaje.id">{{ personaje.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      personajes: []
    };
  },
  mounted() {
    fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5')
      .then(response => response.json())
      .then(personajes => {
        this.personajes = personajes;
      });
  }
};
</script>


<style scoped>
.read-the-docs {
  color: #888;
}
</style>
