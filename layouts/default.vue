<template>
  <div>
    <div class="mb-4 bg-blue-100 p-3 w-full">
      <div class="max-w-4xl mx-auto sm:mx-9 flex gap-3 text-xl">
        <NuxtLink class="underline text-blue-700" to="/">Home</NuxtLink>
        <NuxtLink class="underline text-blue-700" to="/about">About</NuxtLink>
        <NuxtLink class="underline text-blue-700" to="/notes">notes</NuxtLink>
        <NuxtLink class="underline text-blue-700" :to="`/notes/${random()}`"
          >random note
        </NuxtLink>
      </div>
    </div>
    <div class="max-w-4xl mx-auto sm:mx-9">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const random = () => Math.floor(Math.random() * 100) + 1;
</script>

<style></style>
