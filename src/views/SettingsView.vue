<template>
  <AppLoader :isLoading="isLoading" />
  <div class="basis-1/2 rounded-3xl flex flex-col h-full">
    <div class="bg-zinc-800 rounded-3xl gap-4 flex flex-col p-4">
      <div class="w-full flex gap-2 items-center">
        <div class="w-16 font-semibold text-lg">Name</div>
        <input
          v-model="name"
          type="text"
          class="bg-inherit w-full p-2 border rounded-xl border-zinc-700 valid:outline-none"
        />
      </div>
      <div class="w-full flex gap-2 items-center">
        <div class="w-16 font-semibold text-lg">Bio</div>
        <textarea
          v-model="bio"
          class="w-full bg-inherit p-2 rounded-xl border border-zinc-700 valid:outline-none"
        ></textarea>
      </div>
      <div class="w-full flex gap-2 items-center">
        <div class="text-lg font-semibold">Profile Picture</div>
        <input
          type="text"
          class="bg-inherit p-2 w-full border rounded-xl border-zinc-700 valid:outline-none"
          v-model="pfp"
        />
        <img
          :src="pfp"
          class="w-20 aspect-square object-cover rounded-xl"
        />
      </div>
      <div class="w-full flex gap-2 justify-end">
        <AppButton text="Save" class="bg-violet-400 text-violet-950 rounded" />
        <AppButton text="Discard" class="bg-zinc-700 rounded" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

import AppButton from "@/components/common/AppButton.vue";
import AppLoader from "@/components/common/AppLoader.vue";

import { useAuthStore } from "@/stores/auth.js";
import userServices from "@/services/user.js";

// config
const isLoading = ref(false);
const authStore = useAuthStore();

const details = ref({});
const name = ref(null);
const bio = ref(null);
const pfp = ref(null);
const getBasicDetails = async () => {
  try {
    isLoading.value = true;
    const response = await userServices.getBasicDetails(authStore.id);
    details.value = response;
    name.value = details.value.name;
    bio.value = details.value.bio;
    pfp.value = details.value.pfp;
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
};
getBasicDetails();
</script>

<style lang="scss" scoped>
</style>
