<template>
  <div class="border-2 rounded-2xl border-slate-400 p-2 gap-6 flex flex-col">
    <div class="flex gap-2 items-center">
      <img
        src="https://www.mintface.xyz/content/images/2021/08/QmTndiF423kjdXsNzsip1QQkBQqDuzDhJnGuJAXtv4XXiZ-1.png"
        class="h-12 w-12 object-cover rounded-full"
      />
      <div>
        <h4 class="text-xl font-semibold">Ansal Jain</h4>
        <p class="text-xs">Posted yesterday</p>
      </div>
    </div>
    <div class="text-lg">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, rem
      perspiciatis. Minus id sed ab enim nostrum et consectetur, soluta beatae
      natus, vel voluptatibus dicta voluptas? Animi suscipit assumenda nulla
      ratione doloribus temporibus doloremque?
    </div>
    <div class="flex items-center gap-2">
      <i
        class="fa-regular fa-heart fa-xl cursor-pointer text-rose-500"
        v-if="!isLiked"
        @click="toggleLiked"
      ></i>
      <i
        @click="toggleLiked"
        class="fa-solid fa-heart fa-xl text-rose-500 cursor-pointer"
        v-else
      ></i>
      <p class="mb-[2px]">5</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isLiked = ref(true);

const toggleLiked = () => {
  isLiked.value = !isLiked.value;
};
</script>

<style lang="scss" scoped>
</style>
