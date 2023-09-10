<template>
  <AppLoader :isLoading="isLoading" />
  <form
    class="border-slate-400 border-2 p-2 flex flex-col gap-2 rounded-2xl"
    @submit.prevent="handleSubmit"
  >
    <textarea
      class="w-full h-40 bg-inherit focus:outline-none"
      placeholder="New post"
      v-model="newPost"
      required
    ></textarea>
    <button class="bg-white self-end px-2 py-1 text-black rounded-lg">
      Post
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import AppLoader from "@/components/common/AppLoader.vue";
import userServices from "@/services/user";

const router = useRouter();
const newPost = ref("");
const isLoading = ref(false);

const handleSubmit = async () => {
  try {
    isLoading.value = true;
    await userServices.addPost(newPost.value);
  } catch (err) {
    console.log(err);
  } finally {
    isLoading.value = false;
    router.go();
  }
};
</script>

<style lang="scss" scoped>
</style>
