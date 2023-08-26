<template>
  <div>{{ name }} posted {{ lastPost }} ago</div>
</template>

<script setup>
const props = defineProps({
  name: String,
  lastPost: String,
});
</script>

<style lang="scss" scoped>
</style>
