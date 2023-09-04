<template>
  <div
    class="text-left text-2xl text-zinc-500 cursor-pointer flex items-center gap-2"
    :class="{
      'text-violet-400 font-semibold': isActive,
    }"
  >
    {{ text }}
    <div
      v-if="text == 'Requests'"
      class="w-2 h-2 bg-violet-400 rounded-full"
    ></div>
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
    default: false,
  },
});
</script>

<style lang="scss" scoped>
</style>
