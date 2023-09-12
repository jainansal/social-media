<template>
  <AppLoader :isLoading="isLoading" />
  <form
    class="bg-zinc-800 rounded-3xl p-4 drop-shadow-md"
    @submit.prevent="handleSubmit"
  >
    <textarea
      required
      placeholder="New post"
      v-model="content"
      class="w-full h-24 bg-inherit focus:outline-none font-light text-lg"
    ></textarea>
    <div class="flex justify-end">
      <button
        class="px-2 py-1 bg-violet-400 rounded-lg cursor-pointer text-violet-950 font-semibold"
      >
        Post
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";

import AppLoader from "@/components/common/AppLoader.vue";

import userServices from "@/services/user.js";

// config
const toast = useToast();
const isLoading = ref(false);
const router = useRouter();

const content = ref("");

const handleSubmit = async () => {
  try {
    isLoading.value = true;
    await userServices.addPost(content.value);
    toast.success("Post added successfully");
  } catch (err) {
    toast.error("Some error occured. Check console.");
    console.log("Error", err);
  } finally {
    isLoading.value = false;
    setTimeout(() => router.go(), 2000);
  }
};
</script>

<style lang="scss" scoped>
</style>
