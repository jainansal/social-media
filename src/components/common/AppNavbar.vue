<template>
  <div class="bg-slate-700 p-5 flex justify-between items-center">
    <h1 class="text-3xl font-bold">SOCIALS</h1>
    <div class="flex gap-7">
      <div class="text-xl cursor-pointer" @click="() => linkTo('profile')">
        Hello, Ansal
      </div>
      <div class="text-xl cursor-pointer" @click="() => linkTo('login')">
        Logout
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const linkTo = (path) => {
  router.push({ name: path });
};
</script>

<style lang="scss" scoped>
</style>
