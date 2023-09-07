<template>
  <div
    class="w-full aspect-square bg-zinc-800 rounded-3xl flex items-center justify-between flex-col p-4"
  >
    <img
      src="https://e1.pxfuel.com/desktop-wallpaper/643/772/desktop-wallpaper-%E2%98%AE%EF%B8%8E-cute-aesthetic-pfp.jpg"
      alt="pfp"
      class="w-1/2 aspect-square object-cover rounded-full"
    />
    <h1 class="font-semibold text-xl pb-1">Gwen Stacy</h1>
    <div
      v-if="!isRequestCard"
      class="w-full p-1 text-center border border-violet-400 rounded-md text-violet-400 cursor-pointer"
      :class="{
        'bg-violet-400 text-violet-950': !isFriend,
      }"
    >
      {{ isFriend ? "Friends" : "Add as friend" }}
    </div>
    <div v-else class="w-full flex gap-2">
      <div
        class="w-full p-1 text-center border border-green-500 rounded-md text-green-500 cursor-pointer hover:bg-green-500 hover:text-white"
      >
        <i class="fa-solid fa-check"></i>
      </div>
      <div
        class="w-full p-1 text-center border border-red-600 rounded-md text-red-600 cursor-pointer hover:bg-red-600 hover:text-white"
      >
        <i class="fa-solid fa-xmark"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  isRequestCard: {
    type: Boolean,
    default: false,
  },
});

const isFriend = ref(false);
const toggleIsFriend = () => {
  isFriend.value = !isFriend.value;
};
</script>

<style lang="scss" scoped>
</style>
