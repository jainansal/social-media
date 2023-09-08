<template>
  <div
    class="bg-zinc-800 rounded-3xl h-1/4 p-4 flex gap-4 w-full overflow-hidden"
  >
    <img
      :src="userStore.pfp"
      alt="pfp"
      class="h-full aspect-square object-cover rounded-xl"
    />
    <div class="flex flex-col gap-4 w-full overflow-hidden">
      <div>
        <div>
          <div class="font-bold text-2xl">{{ userStore.name }}</div>
          <div class="font-light text-xl">@{{ userStore.username }}</div>
        </div>
        <Badges />
      </div>
      <div class="overlay font-light text-lg">
        {{ userStore.bio }}
      </div>
    </div>
  </div>
</template>

<script setup>
import Badges from "./Badges.vue";

import userServices from "@/services/user.js";
import { useUserStore } from "@/stores/user.js";
import { useAuthStore } from "@/stores/auth.js";

// config
const userStore = useUserStore();
const authStore = useAuthStore();

if (!userStore.id) {
  const getDetails = async () => {
    try {
      const response = await userServices.getBasicDetails(authStore.id);
      userStore.setID(response._id);
      userStore.setName(response.name);
      userStore.setUsername(response.username);
      userStore.setBio(response.bio);
      userStore.setPfp(response.pfp);
    } catch (error) {
      console.log("error", error);
    }
  };
  getDetails();
}
</script>

<style lang="scss" scoped>
</style>
