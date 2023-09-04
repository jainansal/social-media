<template>
  <div class="text-left text-2xl text-zinc-500 cursor-pointer" :class="{
    'text-violet-400 font-semibold': isActive
  }">
    {{ text }}
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "NavItem",
  },
  isActive: {
    type: Boolean,
    default: false
  }
});
</script>

<style lang="scss" scoped>
</style>
