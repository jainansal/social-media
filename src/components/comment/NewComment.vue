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
import { useRouter } from "vue-router";

const emits = defineEmits(["newComment"]);
const router = useRouter();

const comment = ref("");

const addComment = () => {
  if (comment.value.trim()) {
    try {
      emits("newComment", comment.value.trim());
    } catch (error) {
      console.log(error);
      router.go();
    } finally {
      comment.value = "";
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
