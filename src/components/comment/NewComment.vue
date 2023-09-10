<template>
  <div
    class="flex items-center justify-between border border-zinc-700 mt-2 p-1 rounded-lg text-sm gap-1"
  >
    <input
      v-model="comment"
      type="text"
      placeholder="Add comment"
      class="bg-inherit focus:outline-none w-full font-light"
      @keypress.enter="addComment"
    />
    <i class="fa-solid fa-paper-plane text-violet-400 cursor-pointer"></i>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emits = defineEmits(["newComment"]);

const comment = ref("");

const addComment = () => {
  if (comment.value.trim()) {
    emits("newComment", comment.value.trim());
  }
};
</script>

<style lang="scss" scoped>
</style>
