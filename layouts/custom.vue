<template>
  <div>
    <div class="flex gap-3 text-xl">
      <NuxtLink class="underline text-blue-400" to="/nodes">nodes</NuxtLink>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
const random = () => Math.floor(Math.random() * 100) + 1;
</script>

<style scoped></style>
