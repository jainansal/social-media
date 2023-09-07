<template>
  <div class="bg-slate-700 p-5 flex justify-between items-center">
    <h1 class="text-3xl font-bold cursor-pointer" @click="linkTo('home')">
      SOCIALS
    </h1>
    <div class="flex gap-7">
      <div class="text-xl cursor-pointer" @click="() => linkTo('profile')">
        Hello, <span class="font-semibold">{{ firstName }}</span>
      </div>
      <div class="text-xl cursor-pointer" @click="logout">Logout</div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";

import { useUserStore } from "@/stores/user";
import { useAuthStore } from "@/stores/auth";
import authServices from "@/services/auth";

const router = useRouter();
const user = useUserStore();
const auth = useAuthStore();

const { firstName, lastName } = storeToRefs(user);

const logout = async () => {
  try {
    await authServices.logout();
    auth.setLoggedIn(false);
    router.push({ name: "login" });
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

const linkTo = (path) => {
  router.push({ name: path });
};
</script>

<style lang="scss" scoped>
</style>
