<template>
  <div class="text-xl font-semibold pb-2 border-b-2 w-full">
    {{label}}
  </div>
</template>

<script setup>
const props = defineProps({
  label: String
})
</script>

<style lang="scss" scoped>

</style>