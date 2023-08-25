<template>
  <div class="bg-slate-700 p-5 flex justify-between items-center">
    <h1 class="text-3xl font-bold">SOCIALS</h1>
    <div class="flex gap-7">
      <div class="text-xl cursor-pointer" @click="() => linkTo('profile')">
        Hello, {{ firstName }}
      </div>
      <div class="text-xl cursor-pointer" @click="logout">
        Logout
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";

import { useUserStore } from "@/stores/user";
import authServices from '@/services/auth'

const router = useRouter();
const user = useUserStore();

const { firstName, lastName } = storeToRefs(user);

const logout = async () => {
  await authServices.logout();
  router.push({name: 'login'});
}

const linkTo = (path) => {
  router.push({ name: path });
};
</script>

<style lang="scss" scoped>
</style>
