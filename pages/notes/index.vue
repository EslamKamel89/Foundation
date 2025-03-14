<template>
  <div>Notes index</div>
  <div>
    <NoteCard v-for="i in 5" :key="i" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
