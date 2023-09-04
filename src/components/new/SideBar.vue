<template>
  <div
    class="flex flex-col basis-1/4 h-full bg-zinc-800 rounded-3xl text-zinc-300 p-4"
  >
    <div class="flex items-center justify-center pb-2 border-b border-zinc-700">
      <h1 class="font-bold text-4xl">SOCIALS</h1>
    </div>
    <div class="flex items-center justify-center pt-4">
      <div
        class="border flex flex-row items-center p-2 gap-2 rounded-full border-zinc-700 w-75"
      >
        <i class="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          placeholder="Search"
          class="bg-inherit focus:outline-none"
        />
      </div>
    </div>
    <div class="h-full py-8 flex flex-col gap-4 overlay">
      <NavItem
        v-for="(item, index) in navItems"
        :key="index"
        :text="item"
        :isActive="index == 0"
      />
    </div>
    <div class="pt-2 border-t border-zinc-700 flex gap-2 items-center">
      <img
        src="https://exploringbits.com/wp-content/uploads/2022/01/Manga-PFP-1.jpg?ezimgfmt=ng%3Awebp%2Fngcb3%2Frs%3Adevice%2Frscb3-1"
        alt="pfp"
        class="h-16 w-16 object-cover rounded-md"
      />
      <div>
        <div class="text-lg font-semibold">Ansal Jain</div>
        <div class="text-zinc-600 flex items-center gap-1">
          <div class="h-3 w-3 bg-green-600 rounded-full"></div>
          Online
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavItem from "@/components/new/NavItem.vue";
import navItems from "@/components/new/navItems";
</script>

<style lang="scss" scoped>
</style>
