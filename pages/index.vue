<template>
  <Banner />
  <h2 class="text-2xl font-bold">Recent Notes</h2>
  <NoteCard />
  <div class="flex items-center gap-x-2">
    <p>Like Count</p>
    <Button
      :onClick="
        () => {
          counter++;
        }
      "
      :title="counter.toString()"
    />
  </div>
</template>

<script setup lang="ts">
const counter = useCounter();
definePageMeta({
  // middleware: ["console-local"],
});
</script>

<style scoped></style>
