<template>
  <div class="w-screen h-screen flex items-center justify-center">
    <div class="bg-slate-700 flex flex-col items-center p-16 gap-12">
      <h1 class="font-semibold text-4xl">SOCIALS</h1>
      <form class="flex flex-col gap-3" @submit.prevent="linkTo('home')">
        <input
          type="text"
          placeholder="First Name"
          class="p-3 text-lg bg-slate-800 focus:outline-none"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          class="p-3 text-lg bg-slate-800 focus:outline-none"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          class="p-3 text-lg bg-slate-800 focus:outline-none"
          required
        />
        <input
          type="password"
          placeholder="Password"
          class="p-3 text-lg bg-slate-800 focus:outline-none"
          required
        />
        <div class="flex justify-between items-center mt-5">
          <p class="cursor-pointer" @click="linkTo('login')">Already a user?</p>
          <button class="p-2 bg-violet-800 cursor-pointer">Register</button>
        </div>
      </form>
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