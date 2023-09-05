<template>
  <div class="bg-zinc-800 rounded-3xl h-1/4 p-4 flex gap-4 w-full overflow-hidden">
    <img
      src="https://exploringbits.com/wp-content/uploads/2022/01/Manga-PFP-1.jpg?ezimgfmt=ng%3Awebp%2Fngcb3%2Frs%3Adevice%2Frscb3-1"
      alt="pfp"
      class="h-full aspect-square object-cover rounded-xl"
    />
    <div class="flex flex-col gap-4 w-full overflow-hidden">
      <div>
        <div>
          <div class="font-bold text-2xl">Ansal Jain</div>
          <div class="font-light text-xl">@algorhytthm</div>
        </div>
        <Badges />
      </div>
      <div class="overlay font-light text-lg">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae ea, explicabo pariatur assumenda eveniet nulla magni perferendis eaque delectus vitae.
      </div>
    </div>
  </div>
</template>

<script setup>
import Badges from "./Badges.vue";
</script>

<style lang="scss" scoped>
</style>

// 
