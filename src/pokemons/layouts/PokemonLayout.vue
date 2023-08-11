<script setup lang="ts">
import NavBar from '@/shared/components/NavBar.vue';
import type { RouterLink } from '@/router/list-routes';

import { pokemonRoute } from '../router';

const routeLinks: RouterLink[] = pokemonRoute.children?.map(({ name, path, props }) => {

  return {
    name: name?.toString() ?? '',
    path: path,
    title: (props as { title: string }).title,
    visible: (props as { visible: true }).visible
  }
}) || [];


</script>

<template>
  <NavBar :links="routeLinks" is-secondary />
  <div>
    <RouterView />
  </div>
</template>


