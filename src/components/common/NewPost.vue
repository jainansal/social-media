<template>
  <form class="border-slate-400 border-2 p-2 flex flex-col gap-2 rounded-2xl" @submit.prevent="handleSubmit">
    <textarea
      class="w-full h-40 bg-inherit focus:outline-none"
      placeholder="New post"
      v-model="newPost"
      required
    ></textarea>
    <button class="bg-white self-end px-2 py-1 text-black rounded-lg">
      Add
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const newPost = ref('');

const handleSubmit = () => {
  console.log(newPost.value)
}
</script>

<style lang="scss" scoped>
</style>
