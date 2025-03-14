<template>
  <button
    @click="onClick"
    class="border border-blue-500 px-4 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-700"
  >
    {{ title }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  onClick: () => void;
}>();
</script>
