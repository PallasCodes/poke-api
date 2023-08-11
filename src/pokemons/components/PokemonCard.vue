<script setup lang="ts">
import { useRouter } from 'vue-router';
import type { Pokemon } from '../interfaces';

interface Props {
  pokemon: Pokemon
}

const props = defineProps<Props>()

const router = useRouter()

const goTo = () => {
  router.push({
    name: 'pokemon-id',
    params: { id: props.pokemon.id }
  })
}
</script>

<template>
  <div class="pokemon-card" @click="goTo">
    <div>
      <img :src="pokemon.frontSprite" :alt="pokemon.name">
    </div>
    <span>{{ pokemon.name }}</span>
  </div>
</template>

<style scoped>
.pokemon-card img {
  width: 100%;
  height: auto;
}

.pokemon-card span {
  display: block;
  width: 100%;
  font-size: 16;
  font-weight: 500;
}
</style>