<template>
  <AppLoader :isLoading="isLoading" />
  <div class="w-screen h-screen flex items-center justify-center">
    <div class="bg-slate-700 flex flex-col items-center p-16 gap-12 rounded-xl">
      <h1 class="font-semibold text-4xl">SOCIALS</h1>
      <form class="flex flex-col gap-3" @submit.prevent="handleSubmit">
        <input
          type="text"
          placeholder="Username"
          class="p-3 text-lg bg-slate-800 focus:outline-none rounded-md"
          v-model="formData.username"
          required
        />
        <input
          type="password"
          placeholder="Password"
          class="p-3 text-lg bg-slate-800 focus:outline-none rounded-md"
          v-model="formData.password"
          required
        />
        <div class="flex justify-between items-center mt-5">
          <p class="cursor-pointer" @click="link('register')">Create account</p>
          <button class="p-2 bg-violet-800 cursor-pointer">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
// Import from libraries
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";

// Local file imports
import AppLoader from "@/components/common/AppLoader.vue";
import authServices from "@/services/auth";

// Config
const router = useRouter();
const toast = useToast();

// Base variables
const isLoading = ref(false);
const errorMsg = ref("");

// Specific variables
const formData = reactive({
  username: "",
  password: "",
});

const handleSubmit = async () => {
  try {
    isLoading.value = true;
    await authServices.login(formData);
    router.go();
  } catch (error) {
    toast.error("Some error occured");
  } finally {
    isLoading.value = false;
  }
};

const link = (path) => {
  router.push({ name: path });
};
</script>

<style lang="scss" scoped>
</style>
