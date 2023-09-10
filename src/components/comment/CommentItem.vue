<template>
  <div class="flex gap-2">
    <h1 class="text-violet-400 cursor-pointer">{{ details.author.name }}</h1>
    <p class="font-light">{{ details.content }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  details: Object,
});
</script>

<style lang="scss" scoped>
</style>
