<template>
  <div
    class="flex flex-col basis-1/4 h-full bg-zinc-800 rounded-3xl text-zinc-300 p-4"
  >
    <div
      class="flex items-center justify-center pb-2 border-b border-zinc-700 h-12"
    >
      <h1 class="font-bold text-4xl">SOCIALS</h1>
    </div>
    <div class="flex items-center justify-center pt-4 h-16">
      <div
        class="border flex flex-row items-center p-2 gap-2 rounded-full border-zinc-700 w-3/4"
      >
        <i class="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          placeholder="Search"
          class="bg-inherit focus:outline-none w-full"
        />
      </div>
    </div>
    <div class="h-full py-4 overflow-hidden">
      <div class="grid grid-cols-2 gap-4">
        <NavItem
          v-for="(item, index) in navItems"
          :key="index"
          :details="item"
          :isActive="item.to == activeIndex"
          @buttonClick="buttonClick(item.to)"
        />
      </div>
    </div>
    <div
      class="pt-2 border-t border-zinc-700 flex justify-between items-center"
    >
      <div class="flex gap-2 items-center">
        <img
          src="https://exploringbits.com/wp-content/uploads/2022/01/Manga-PFP-1.jpg?ezimgfmt=ng%3Awebp%2Fngcb3%2Frs%3Adevice%2Frscb3-1"
          alt="pfp"
          class="h-16 w-16 object-cover rounded-md cursor-pointer"
          @click="visitProfile"
        />
        <div>
          <div
            class="text-lg font-semibold cursor-pointer hover:text-violet-300"
            @click="visitProfile"
          >
            Ansal Jain
          </div>
          <div class="text-zinc-600 flex items-center gap-1">
            <div class="h-3 w-3 bg-green-600 rounded-full"></div>
            Online
          </div>
        </div>
      </div>
      <div
        class="bg-red-700 py-1 px-2 rounded-lg cursor-pointer"
        @click="logoutUser"
      >
        <i class="fa-solid fa-right-from-bracket fa-lg"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

import NavItem from "@/components/nav/NavItem.vue";
import navItems from "@/components/nav/navItems.js";
import authServices from "@/services/auth.js";

const activeIndex = ref(route.name);
const buttonClick = (val) => {
  activeIndex.value = val;
};

const visitProfile = () => {
  router.push({ name: "profile" });
};

const logoutUser = async () => {
  try {
    await authServices.logout();
  } catch (error) {
    console.log(error);
  } finally {
    router.go();
  }
};
</script>

<style lang="scss" scoped>
</style>
