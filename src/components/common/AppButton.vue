<template>
  <div class="px-2 py-1 cursor-pointer font-semibold">
    {{ text }}
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "Click Me",
  },
});
</script>

<style lang="scss" scoped>
</style>
