<template>
  <div
    class="w-full aspect-square bg-zinc-800 rounded-3xl flex items-center justify-between flex-col p-4"
  >
    <img
      src="https://e1.pxfuel.com/desktop-wallpaper/643/772/desktop-wallpaper-%E2%98%AE%EF%B8%8E-cute-aesthetic-pfp.jpg"
      alt="pfp"
      class="w-1/2 aspect-square object-cover rounded-full"
    />
    <h1 class="font-semibold text-xl">Gwen Stacy</h1>
    <div
      class="w-full p-1 text-center border border-violet-400 rounded-md text-violet-400 cursor-pointer"
      :class="{
        'bg-violet-400 text-violet-950': !isFriend,
      }"
    >
      {{ isFriend ? 'Friends' : 'Add as friend'}}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isFriend = ref(false);
const toggleIsFriend = () => {
  isFriend.value = !isFriend.value;
};
</script>

<style lang="scss" scoped>
</style>
