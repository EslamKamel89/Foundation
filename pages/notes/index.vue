<template>
  <div>Notes index</div>
  <div class="flex gap-x-2 mb-2">
    <NewNote class="flex-1" />
    <Button :title="`Toggle`" :onClick="() => (condition = !condition)" />
  </div>
  <component :is="condition ? wisdomOne : wisdomTwo" />
  <div>
    <NoteCard v-for="i in 5" :key="i" />
  </div>
</template>

<script setup lang="ts">
const condition = ref(false);
const wisdomOne = resolveComponent("WisdomOne");
const wisdomTwo = resolveComponent("WisdomTwo");
</script>

<style scoped></style>
