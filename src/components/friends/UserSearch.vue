<template>
  <div
    class="flex flex-row items-center p-3 gap-2 w-full rounded-3xl bg-zinc-800"
  >
    <i class="fa-solid fa-magnifying-glass"></i>
    <input
      v-model="input"
      type="text"
      placeholder="Search users"
      class="bg-inherit focus:outline-none w-full"
      @keypress.enter="searchUser"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

const input = ref("");
const emits = defineEmits(["search"]);

const searchUser = () => {
  if (input.value.trim()) {
    emits("search", input.value.trim());
  }
};
</script>

<style lang="scss" scoped>
</style>
