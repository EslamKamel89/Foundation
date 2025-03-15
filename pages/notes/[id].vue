<template>
  <div>note: {{ route.params.id }}</div>
  <Button title="Copy Url" :onClick="copyUrl" />
</template>

<script setup lang="ts">
// import usePr from "~/composables/utlis/usePr";

const route = useRoute();
const { copyToClipboard } = useClipboardCopy();
const { pr } = usePr();
const copyUrl = () => {
  copyToClipboard(window.location.href);
  pr(window.location.href, "url copied to the clipboard");
};
</script>
